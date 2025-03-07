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
                    npm install -g @angular/cli@18.2.0
                    ng version
                    ng build
                    ls -larth
                '''
            }
        }
    }
}
