pipeline {
    agent any

    stages {
        stage('w/o docker') {
            steps {
                sh ''' 
                    echo "Without docker"
                    ls -larth
                    touch container-no.txt
                '''
            }
        }
        
        stage('w docker') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "With docker"
                    ls -larth
                    touch container-yes.txt
                '''
            }
        }
    }
}
