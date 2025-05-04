podman build -t cpg .
podman run -it -v $(pwd):/app -p 3000:3000 cpg