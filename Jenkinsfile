pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
    timeout(time: 25, unit: 'MINUTES')
  }

  stages {
    stage("Checkout") {
      steps {
        checkout scm
        sh 'echo "Workspace: $(pwd)"; df -h; free -h'
      }
    }

    stage("Build image") {
      steps {
        sh '''
          set -e
          docker compose -f docker-compose.yaml build
        '''
      }
    }

    stage("Deploy") {
      steps {
        sh '''
          set -e
          docker compose -f docker-compose.yaml up -d --build
          docker compose -f docker-compose.yaml ps
        '''
      }
    }
  }

  post {
    always {
      sh '''
        set +e
        docker system df
        # clean dangling layers to prevent disk fill
        docker image prune -f
        docker builder prune -f
      '''
    }
  }
}

// pipeline {
//   agent any

//   options {
//     timestamps()
//     disableConcurrentBuilds()
//     timeout(time: 25, unit: 'MINUTES')
//   }

//   stages {
//     stage("Pull latest code") {
//       steps {
//         checkout scm
//         sh '''
//           echo "Workspace: $(pwd)"
//           echo "Branch: $(git rev-parse --abbrev-ref HEAD)"
//           echo "Commit: $(git rev-parse --short HEAD)"
//           ls -la
//         '''
//       }
//     }

//     stage("Build Docker image(s)") {
//       steps {
//         sh '''
//           set -e
//           docker compose -f docker-compose.yaml build
//         '''
//       }
//     }

//     stage("Start/Update containers") {
//         steps {
//             sh '''
//             set -e
//             docker compose -f docker-compose.yaml down || true
//             docker compose -f docker-compose.yaml up -d --build
//             docker compose -f docker-compose.yaml ps
//             '''
//         }
//     }
//   }
// }
