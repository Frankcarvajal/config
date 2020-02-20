# 💵 SALESFORCE

## Salesforce DX

1. I should have a Trailhead account that has a Dev Org & a Scratch Playground.
2. Ensure SFDX is installed on the machine
```
npm install --global sfdx-cli
```
or update
```
sfdx update
```

3. DX Command Cheatsheet Basics

### Help
### Login to Dev Hub
```
sfdx force:auth:web:login -d -a DevHub
// -d makes this default
// -a sets an alias as what would be DevHub here
```
### Authenticate Dev Hub / Verify Dev Hub
```
sfdx force:org:list
// Check current list to see if alias org is connected

sfdx force:auth:web:login --setdefaultdevhubusername --setalias csiro-dev-hub
// Authenticate then run same list command to verify
```
### Create a SFDX Project
```
sfdx force:project:create -n [nameOfProject]
```
### Create SFDX Scratch Org
```
sfdx force:org:create -n [nameOfProject]
// -n is to create an org with no namespace

// or
sfdx force:org:create --definitionfile config/project-scratch-def.json --setdefaultusername --setalias <aliasOfYourChoice> --durationdays 30
```
### Verify a Scratch Org
```
sfdx force:user:list
```
### Open SFDX Scratch Org
```
sfdx force:org:open --targetusername <username|alias>
```
### Generate Org Password
```
sfdx force:user:password:generate -u [scratchOrgUserOrAlias]
```
### Delete Scratch Org
```
sfdx force:org:delete -u [targetUserNameOrAlias]
```
### Deploy Source Code to Scratch Org
```
sfdx force:source:push
```
### Assign Permission Sets
```
// (This can also be done from your org)
sfdx force:user:permset:assign -n [NameOfPermissionSet]
// or
sfdx force:user:permset:assign --permsetname Your_Permset --targetusername <username|alias>
```
### Pull MetaData
```
sfdx force:source:pull
```
### Display Org Details
```
sfdx force:org:display -u [NameOfAliasScratchOrg]
```
### Convert MetaData to Source Format
```
sfdx force:mdapi:convert --rootdir src
```
### Deploy Destructive Changes to Scratch Org
```
sfdx force:mdapi:deploy --ignorewarnings -w -1 --deploydir destructive -u <username|alias>
// Occasionally you'll need to deploy destructive changes to your scratch org to remove metadata elements that are no longer needed.
```
### Retrieving Source Code from Scratch Org
```
sfdx force:source:pull --forceoverwrite --targetusername <username|alias>
// If you do any configuration directly in the scratch org, you'll need to pull these changes down before you can commit them to your branch.
```

To Create Apex Class or Lightning Web Component `Cmd+Shift+p` to use `SFDX` commands.


## BACK TO 💯 [OTHER](./Other.md)
