pipeline {
    agent any

    stages {    
        stage('build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm ci
                    ng version
                    ng build
                    ls -larth
                '''
            }
        }
    }
}
