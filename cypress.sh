#!/usr/bin/env sh
argTestType=$1
argSpecName=$2
  if [ -z "$argTestType" ] ; then
    eval "./node_modules/.bin/cypress run"
  else
    if [ -z "$argSpecName" ] ; then
      eval "./node_modules/.bin/cypress run  --spec 'cypress/e2e/$argTestType/**.cy.js'"
    else
      eval "./node_modules/.bin/cypress run  --spec 'cypress/e2e/$argTestType/$argSpecName.cy.js'"
    fi
  fi