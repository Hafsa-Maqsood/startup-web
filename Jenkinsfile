pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Hafsa-Maqsood/startup-web.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('startup-web-image', '.')
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    docker.image('startup-web-image').run('-d -p 3000:3000')
                }
            }
        }
    }
}
