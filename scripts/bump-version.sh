#!/bin/bash

# Get the current branch name
branch=$(git rev-parse --abbrev-ref HEAD)

if [[ "$branch" == "develop" ]]; then
  # Bump patch version on develop branch
  npm version patch --no-git-tag-version
  git add package.json
elif [[ "$branch" == "master" ]]; then
  # Bump minor version on master branch
  npm version minor --no-git-tag-version
  git add package.json
fi
