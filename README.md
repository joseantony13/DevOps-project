# DevOps Project – Local Setup (No Cloud)

This repository contains a **comprehensive DevOps project** implemented entirely in a **local environment**, focusing on real-world DevOps workflows and toolchain integration **without using any cloud platforms**.

The project was developed and tested using **WSL (Windows Subsystem for Linux) via PowerShell**, emphasizing strong DevOps fundamentals and hands-on experience.

---

## Project Overview

This project demonstrates how modern DevOps practices can be implemented in a **local setup**, covering the complete lifecycle from **code commit to deployment, monitoring, and incident analysis**.

The primary focus areas include:
- CI/CD pipelines  
- Containerization and orchestration  
- GitOps-based deployments  
- Infrastructure automation  
- Monitoring and observability  
- Debugging and root cause analysis  

---

## Environment & Tools

### Environment
- **Operating System:** Windows  
- **Linux Runtime:** WSL (via PowerShell)  
- **Container Runtime:** Docker  

### Tools & Technologies
- Git & GitHub  
- Jenkins  
- Docker  
- Docker Compose  
- Kubernetes (Minikube / kind)  
- GitHub Actions  
- Argo CD  
- Prometheus  
- Grafana  
- Shell Scripting  
- Nginx  
- Redis  

---

## CI/CD & Automation

- Implemented **CI pipelines using Jenkins** for automated build, test, and Docker image creation  
- Built **CI workflows with GitHub Actions** for application build and deployment  
- Automated container lifecycle using Docker  
- Integrated CI pipelines with Kubernetes deployments  

---

## Container Orchestration (Kubernetes)

- Dockerized application deployed on a **local Kubernetes cluster**  
- Kubernetes manifests created for:
  - Deployments  
  - Services  
- Used `kubectl` to manage and verify workloads  
- Enabled local service exposure for application access  

---

## GitOps Workflow

- Implemented **GitOps-based continuous delivery** using Argo CD  
- Kubernetes manifests stored and versioned in GitHub  
- Argo CD continuously monitors the repository and synchronizes cluster state  
- Application updates triggered automatically via Git commits  

---

## Infrastructure Automation

- Used **Docker Compose** to provision multiple services locally:
  - Jenkins  
  - Nginx  
  - Redis  
  - Application services  
- Created shell scripts to automate environment setup and service startup  
- Implemented basic health checks and logging  

---

## Monitoring & Observability

- Configured **Prometheus** to collect metrics from containerized applications  
- Integrated **Grafana** for metrics visualization  
- Created custom dashboards for application and system monitoring  
- Exported dashboards for reuse  

---

## Debugging & Root Cause Analysis

- Simulated application failures in a local environment  
- Collected and analyzed logs to identify issues  
- Reproduced failures to understand behavior  
- Documented root causes and proposed fixes  

---

## Project Structure (Sample)

```bash
.
├── app/
├── docker/
├── kubernetes/
├── jenkins/
├── github-actions/
├── monitoring/
├── scripts/
│   └── setup.sh
└── README.md
