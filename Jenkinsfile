node {
    def app
    stage('Clone repo') {
      checkout scm
    }
    stage('Building') {
      app = docker.build("${JOB_NAME}")
      echo "Done"
    }
    stage('Push image') {
      docker.withRegistry('https://localhost:5000') {
        app.push("${env.BUILD_NUMBER}")
        app.push("latest")
      }
    }
    stage('Show item') {
      echo "${env.BUILD_NUMBER}"
    }
    stage('Kill last instance') {
      sh 'docker stop parilova_ss || true && docker rm parilova_ss || true'
    }
    stage('Start new instance') {
      sh 'docker run -d --restart=always --name=parilova_ss -e VIRTUAL_HOST=ss.parilova.com localhost:5000/swop_shop_test/master:latest'
    }
    stage('Clean up') {
      sh 'docker container prune -f'
    }
    stage('Clean images') {
      sh 'docker image prune -f'
    }
}
