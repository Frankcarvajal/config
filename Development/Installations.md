# ⚡️ INSTALLATIONS

Time to hit iTerm or Terminal & install what's needed for development. I'm leaving unique installations such as global package installations or Saleforce installations out, it can be within [Extras](../../../Extras/Extras.md).

## 1. Xcode - Integrated Development Environment
```
sudo xcodebuild -license
xcode-select --install
```

## 2. Homebrew - Package Manager for installing tools & updating them easily.
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor

// or

ruby -e "$(curl https://raw.github.com/gist/323731/install_homebrew.rb)"
```

## 3. NVM (Node Version Management), Node.js, & NPM (Node Package Management)
This is required for modern JavaScript development. Using NVM out the gate is fantastic for different node versions. Different projects use different versions which means node modules may be off if you are not using the correct version. Installing NVM allows for you to have quick & effective control. NPM will come automatically with installing a version of node.
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
Then use nvm to install the LTS (Long-Term Support) Node/NPM version.
```
nvm install node
```

Verify installations
```
nvm use default
```
```
node -v
```
```
npm -v
```

See https://github.com/nvm-sh/nvm to see how easy it is to install other node versions, list those Node versions `nvm ls`, switch between them, remove them, or set a different version as a default.

## 4. SSH (Secure Shell) Key
We use SSH (Secure SHell) keys to interact with our code repositories.  To do this you will need to copy the content of a key on your computer and add it to our repo providers: GitHub, Bitbucket, or GitLab (depends on company & personal use).  You may already have a key on your computer that you can use.

Check for an existing SSH key
```
cat ~/.ssh/id_rsa.pub
```
Create a new SSH Key
```
ssh-keygen -t rsa -b 2048
```
Verify a new SSH Key
```
cat ~/.ssh/id_rsa.pub
```
Copy SSH Key
```
cat ~/.ssh/id_rsa.pub | pbcopy
```

[Add SSH Key to GitHub](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

## 5. git - Version Control
Installing Xcode command tools means you won't need to manually install git, if for some reason it doesn't exist, type this command in iTerm & it will prompt you to install.
```
git --version
```
Working with others requires version control management when working on the same code bases whether the repository is a monolithic code base or multiple repositories.

```
git config --global user.name <Your GitHub Username without the angle brackets>
git config --global user.email <Your GitHub Email without the angle brackets>
``` 

If you're using GitHub, BitBucket, or GitLab to manage repositories, you will still need to login through the terminal at some point in order to clone repositories to your local machine. Keep in mind that when you do this, if you have authenticator set up on GitHub for example, the password will be your auth code, not your normal GitHub password!
https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#using-a-token-on-the-command-line

## 6. Visual Studio Code - Path + Extensions
Being inside a specific folder/directory within your terminal or iTerm and typing only `code .` to open that project folder in Visual Studio Code instantly is very handy.
Open VSC & press `Cmd+Shift+p` to open a menu, type & select `Shell Command: Install 'code' command in PATH`. In Terminal create a folder with `mkdir testDir && cd testDir && touch index.html index.css index.js` then type `code .` to ensure it is working.

Extensions can take a lot of time to manually install, so why manually install?

Instead, we're going to create a `.sh` file to execute within terminal to install all the extensions in Visual Studio Code in one command. If you have a prior machine that you want to mimic vsc extensions with, in that machine run this to see all the extensions you have installed to use for the next step. 
```
code --list-extensions | xargs -L 1 echo code --install-extension
```

You'll most likely not want to do that every time, so create a sh file to copy and paste that list into within this repository to easily clone down or grab for later:

```
touch vsc-installs.sh && open .`
```
Right click it in finder and open either as text file or choosing VSCode always as the option (what I prefer), paste in the list from the first command & save.

Execute the sh script & await for installation.
```
sh vsc-installs.sh`
```

I will have my own vsc-installs sh script here, if you choose to use mine, don't forget to remove my Salesforce extensions if not working with Salesforce, add others depending on utilization or need.

[My vsc-installs.sh file](./vsc-installs.sh) or replace with yours.

## MOVE ON TO 🔧 [CONFIGURATIONS](./Configurations.md)

## BACK TO 🔨 [DEVELOPMENT](./Development.md)
