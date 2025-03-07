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
                    ls -larth
                    node --version
                    npm --version
                    npm install
                    npm update
                    npm install -g @angular/cli
                    ng version
                    ng build
                    ls -larth
                '''
            }
        }
    }
}
