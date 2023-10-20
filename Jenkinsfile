pipeline {
    agent any
    
    environment {
        // Define environment variables, if needed
        DOCKER_REGISTRY = 'hub.docker.com'
        IMAGE_NAME = 'natinael/todo-frontend'
        
    }

    stages {
        stage('fetch github code') {
            steps {
                git 'https://github.com/NatinaelSeifu/AWS-Mern-Deploy-Frontend.git/'
        
              }
            }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image from the Dockerfile in the project root
                script {
                    sh "docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER} ."
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                // Push the Docker image to your Docker registry
                script {
                    withCredentials([usernamePassword(usernameVariable: 'DOCKER_HUB_USERNAME', passwordVariable: 'DOCKER_HUB_PASSWORD')]) {
                        sh "docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD"
                    }
                    sh "docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${BUILD_NUMBER}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded! Your Docker image is built and pushed.'
        }
        failure {
            echo 'Pipeline failed! Please check the logs for more information.'
        }
    }
}
