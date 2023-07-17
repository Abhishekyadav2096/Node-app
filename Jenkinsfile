#!/usr/bin/env groovy

pipeline {
   agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    stages {
        
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm start'
            }
        }
    }
}
