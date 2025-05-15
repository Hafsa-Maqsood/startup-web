pipeline {
    agent any

    environment {
        DOCKER_HUB_USERNAME = 'hafsa'
        IMAGE_NAME = 'devops'
        DOCKER_CREDENTIALS_ID = 'DevOps' 
        DOCKER_REGISTRY = 'https://index.docker.io/v1/'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Hafsa-Maqsood/startup-web.git'
            }
        }

        stage('Build Docker Image') {
            steps {
              script {
    def dockerImage = docker.build("${DOCKER_HUB_USERNAME}/${IMAGE_NAME}:latest")
}
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(DOCKER_REGISTRY, DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}

