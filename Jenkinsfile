node {
    def PROJECT_NAME = "ss.parilova.com"
    def DIST_DIR = "/var/builds/${PROJECT_NAME}"
    def environment
    stage "Prepare environment"
        checkout scm
        environment  = docker.build "${PROJECT_NAME}"
    stage "Building"
        environment.inside("--volume $HOME/dist:${DIST_DIR}") {
            stage "Install deps"
                sh "yarn"
            stage "Build"
                sh "yarn build"
        }
    stage "Delivery"
        stage "Stoping previous build"
            try {
                sh "docker stop ${PROJECT_NAME} || true && docker rm ${PROJECT_NAME} || true"
            } catch (exc) {
                echo "There is no old projects"
            }
        stage "Clearing previous build"
            try {
                sh "rm -r ${DIST_DIR}"
            } catch (exc) {
                echo "There is no old projects"
            }
        
        stage "Move distribution"
            sh "mv ./dist ${DIST_DIR}"

        stage "Starting"
            sh "docker run --restart=always -e VIRTUAL_HOST=${PROJECT_NAME} --name ${PROJECT_NAME} -v ${DIST_DIR}:/usr/share/nginx/html:ro -d nginx "

    stage "Cleanup"
        deleteDir()
}
