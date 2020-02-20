# 🔧 CONFIGURATIONS

## 1. global git ignore
In the root directory create a global git ignore file & open finder, open the hidden dot file in VSCode.
```
touch .gitignore && open .
```

Paste:
```
# Node
npm-debug.log
/node_modules

# Mac
.DS_Store

# Visual Code
.history
.vscode

# vi
*~

# General
npm-debug.log*
yarn-debug.log*
yarn-error.log*
log/
*.log
*.dump

# Testing
/coverage

# Parcel or Webpack
dist/
public/
```

## 2. Configure .zshrc file, iTerm2, & Aliases

If you are using Bash then you will most likely need to create a `.bash_profile` in your root directory instead of a `.zshrc` file. If you are using Z-Shell (Zsh) as default with modern Macs, you will still need to create a `.zshrc` file.

We will take steps as if zsh was not installed.
Install zsh & zsh-completions (autocompletiong of path with tab)

```
brew install zsh zsh-completions
```

Install Oh-My-Zsh Framework with over 1200+ Contributors and over 200+ useful plugins + tools beyond the normal Z-Shell or Terminal.
```
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

![Oh-My-Zsh]('../Assets/Installing Oh-My-Zsh.png')

Create `.zshrc` file & open it to paste configurations:

```
// In the root home directory
touch .zshrc && open .
// Cmd+Shift+. to see hidden dot files if you don't have it toggled on
// Right click the .zshrc file and open it with Visual Studio Code & select box to always do this.
```

 [Download Spaceship Zsh Theme](https://denysdovhan.com/spaceship-prompt/)

Clone this repo:

```
git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"
```

Symlink `spaceship.zsh-theme` to your oh-my-zsh custom themes directory:

```
ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
```

Set `ZSH_THEME="spaceship"` in my `.zshrc`. My `.zshrc` configurations with basic starter Aliases for Docker + git

```JSON
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
export TERM="xterm-256color"

# ZSH_THEME="bullet-train" // Alternate
ZSH_THEME="spaceship"
BULLETTRAIN_CONTEXT_BG="#173347"
BULLETTRAIN_PROMPT_ORDER=(
    git
    context
    dir
    time
)

plugins=(git)
export ZSH=/Users/Zion/.oh-my-zsh
source $ZSH/oh-my-zsh.sh
export ZSH=/Users/Zion/.oh-my-zsh

[[ -f /Users/Zion/.nvm/versions/node/v10.4.0/lib/node_modules/electron-forge/node_modules/tabtab/.completions/electron-forge.zsh ]] && . /Users/Zion/.nvm/versions/node/v10.4.0/lib/node_modules/electron-forge/node_modules/tabtab/.completions/electron-forge.zsh

# Aliases - General
alias zshconfig="mate ~/.zshrc"
alias ohmyzsh="mate ~/.oh-my-zsh"
alias kill="killall node"
alias bb="/bin/bash"

# git
alias gcm="git checkout master"
alias gcr="git checkout release"
alias gnb=gnb
alias gfc=gfc
alias gcb="git checkout $1"
alias gma="git merge abort"
alias gmm="git merge master"
alias gpom="git push origin master" # dont judge me
alias gpro="git pull --rebase origin master"
alias gpru="git pull --rebase upstream master"
alias gra="git rebase --abort"
alias grc="git rebase --continue"

# NPM Scripts
alias purge="rm -rf node_modules package-lock.json; npm i"
alias dev="npm run dev"
alias devs="npm run dev:s"
alias build="npm run build"

# Docker
alias dkps="docker ps"
alias dkst="docker stats"
alias dkpsa="docker ps -a"
alias dkimgs="docker images"
alias dkcpup="docker-compose up -d"
alias dkcpdown="docker-compose down"
alias dkcpstart="docker-compose start"
alias dkcpstop="docker-compose stop"
```

### Get iterm colors for iTerm2

`tokyo-night.itermcolors`

[https://github.com/enkia/tokyo-night-vscode-theme](https://github.com/enkia/tokyo-night-vscode-theme)

Clone repository, then `open .` , find the iterm colors file, click it to import into iTerm.

is supplied in this theme's ~/.vscode/extensions folder or via

[github.](https://github.com/enkia/tokyo-night-vscode-theme/blob/master/tokyo-night.itermcolors)

![Oh-My-Zsh]('../Assets/itermcolors Import.png')

### Update iTerm Preferences Step by Step:

![Oh-My-Zsh]('../Assets/iTerm Config 1.png')

![Oh-My-Zsh]('../Assets/iTerm Config 2.png')

![Oh-My-Zsh]('../Assets/iTerm Config 3.png')

![Oh-My-Zsh]('../Assets/iTerm Config 4.png')

![Oh-My-Zsh]('../Assets/iTerm Config 5.png')

![Oh-My-Zsh]('../Assets/iTerm Config 6.png')

## 3. VSC Settings & Global Snippets
Visiual Studio Code (Top Left) -> Preferences -> Settings -> Click little folded paper arrow icon in top right to toggle to JSON.

I like to keep my default VSC Settings to a bare minimum on new machines & add whats needed based on what I do on that machine later.

### JSON Settings

```JSON
{
    "editor.fontFamily": "Dank Mono",
    "editor.fontSize": 15,
    "editor.fontLigatures": true,
    "editor.multiCursorModifier": "alt",
    "editor.mouseWheelZoom": true,
    "editor.smoothScrolling": true,
    "editor.formatOnPaste": false,
    "editor.formatOnSave": true,
    "editor.wordWrap": "on",
    "editor.wordWrapColumn": 99,
    "editor.tabSize": 2,
    "editor.tabCompletion": "on",
    "editor.renderIndentGuides": false,
    "editor.wordBasedSuggestions": true,
    "editor.snippetSuggestions": "top",
    "editor.renderWhitespace": "all",
    "editor.minimap.enabled": false,
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": false
    },
    "workbench.iconTheme": "vscode-icons",
    "workbench.colorTheme": "Tokyo Night Storm",
    "workbench.panel.defaultLocation": "right",
    "window.zoomLevel": 0,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "atomKeymap.promptV3Features": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "javascript.preferences.quoteStyle": "single",
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "git.enableSmartCommit": true,
    "gitlens.views.fileHistory.enabled": true,
    "gitlens.views.lineHistory.enabled": true,
    "gitlens.keymap": "chorded",
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressShowKeyBindingsNotice": true,
        "suppressUpdateNotice": false,
        "suppressWelcomeNotice": true,
        "editor.fontSize": 16,
        "files.autoSave": "on",
        "editor.tabSize": 2
    },
}
```

### Global Snippets
Visual Studio Code -> Preferences -> User Snippets -> Create New Global -> Name `Global`(press enter to create) and paste/save

My snippets are for JavaScript, React, & Testing. You may want to use different snippets, add other snippets, or modify these. You can also install extensions for snippets that will generate boiler plate HTML files etc easily.

```
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
  // Placeholders with the same ids are connected.
  // Example:
  // "Print to console": {
  // 	"scope": "javascript,typescript",
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
  "Promise": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "pro",
    "body": [
      "new Promise((resolve, reject) => {\n  $1\n})"
    ],
    "description": "Promise"
  },
  "TryCatch": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "try",
    "body": [
      "try {\n  $1\n} catch (err) {\n  console.log(err)\n}"
    ],
    "description": "TryCatch"
  },
  "Arrow Iffe": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "iffe",
    "body": [
      "(() => {\n  $1\n})()"
    ],
    "description": "Arrow Iffe"
  },
  "Then": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "then",
    "body": [
      "then(\n  (data) => {\n    $1\n  },\n  (err) => {\n    console.log(err)\n  }\n)"
    ],
    "description": "Then"
  },
  "Arrow Function": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "af",
    "body": [
      "($1) => {\n\n}"
    ],
    "description": "Arrow Function"
  },
  "console.log var": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "cl",
    "body": [
      "console.log('$1 :', $1)"
    ],
    "description": "console.log var"
  },
  "console.log stringify": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "jcl",
    "body": [
      "console.log('$1 :', JSON.stringify($1, null, 2))"
    ],
    "description": "console.log stringify"
  },
  "console.warn var": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "cw",
    "body": [
      "console.warn('$1 :', $1)"
    ],
    "description": "console.warn var"
  },
  "console.warn stringify": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "jcw",
    "body": [
      "console.warn('$1 :', JSON.stringify($1, null, 2))"
    ],
    "description": "console.warn stringify"
  },
  "console.info": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "info",
    "body": [
      "console.info('$1 :', $1)"
    ],
    "description": "console.info"
  },
  "console.info stringify": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "jerr",
    "body": [
      "console.error(JSON.stringify($1, null, 2))"
    ],
    "description": "console.info stringify"
  },
  "console.error": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "err",
    "body": [
      "console.error('$1 :', $1)"
    ],
    "description": "console.error"
  },
  "if": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "if",
    "body": [
      "if ($1) {\n  $2\n}"
    ],
    "description": "if"
  },
  "for": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "for",
    "body": [
      "for (var i = 0, k = $1.length; i < k; i++) {\n\n}"
    ],
    "description": "for"
  },
  "for of": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "forof",
    "body": [
      "for ($1 of $2) {\n\n}\n"
    ],
    "description": "for of"
  },
  "for in": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "forin",
    "body": [
      "for (var $1 in $2) {\n  if ($2.hasOwnProperty($1)) {\n\n  }\n}\n"
    ],
    "description": "for in"
  },
  "do while": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "do",
    "body": [
      "do {\n  $2\n} while ($1)"
    ],
    "description": "do while"
  },
  "react component": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rcc",
    "body": [
      "import React, { Component } from 'react'\n\nexport default class $1 extends Component {\n  state = {}\n\n  render () {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n"
    ],
    "description": "react component"
  },
  "react functional component": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rfc",
    "body": [
      "import React, { Component } from 'react'\n\nconst $1 = () => {\n  return (\n    <div>$1</div>\n  )\n}\n\nexport default $1\n"
    ],
    "description": "react functional component"
  },
  "react decorated container": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rct",
    "body": [
      "import React, { Component } from 'react'\nimport { connect } from 'react-redux'\nimport { bindActionCreators } from 'redux'\n\nconst mapStateToProps = state => ({})\nconst mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))\n\n@connect(mapStateToProps, mapDispatchToProps)\nexport default class $1 extends Component {\n  state = {}\n\n  render () {\n    return (\n      <div>$1</div>\n    )\n  }\n}\n"
    ],
    "description": "react decorated container"
  },
  "react native component": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rncp",
    "body": [
      "import React, { Component } from 'react'\nimport { StyleSheet, Text, View } from 'react-native'\n\nexport default class $1 extends Component {\n  state = {}\n\n  render () {\n    return (\n      <View>\n        <Text>$1</Text>\n      </View>\n    )\n  }\n}\n"
    ],
    "description": "react native component"
  },
  "react native functional component": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rnfc",
    "body": [
      "import React, { Component } from 'react'\nimport { StyleSheet, Text, View } from 'react-native'\n\nconst $1 = () => {\n  return (\n    <View style={styles.container}>\n      <Text>$1</Text>\n    </View>\n  )\n}\n\nconst styles = StyleSheet.create({\n  container: {}\n})\n\nexport default $1\n"
    ],
    "description": "react native functional component"
  },
  "react native decorated container": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rnct",
    "body": [
      "import React, {Component} from 'react'\nimport {StyleSheet, Text, View} from 'react-native'\nimport PropTypes from 'prop-types'\nimport {connect} from 'react-redux'\nimport {bindActionCreators} from 'redux'\n\nconst mapStateToProps = state => ({})\nconst mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))\n\n@connect(mapStateToProps, mapDispatchToProps)\nexport default class $1 extends Component {\n  static propTypes = {}\n\n  state = {}\n\n  render () {\n    return (\n      <View style={styles.container}>\n        <Text>$1</Text>\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {}\n})\n"
    ],
    "description": "react native decorated container"
  },
  "react render": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rr",
    "body": [
      "render () {\n  return (\n    $1\n  )\n}"
    ],
    "description": "react render"
  },
  "react action creator": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "rac",
    "body": [
      "export function $1 () {\n  return {\n    type: '',\n    payload: ''\n  }\n}"
    ],
    "description": "react action creator"
  },
  "react async action creator": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "raac",
    "body": [
      "export function $1 () {\n  return async dispatch => {\n    dispatch({\n      type: '',\n      payload: ''\n    })\n  }\n}"
    ],
    "description": "react async action creator"
  },
  "react mapStateToProps": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "mstp",
    "body": [
      "const mapStateToProps = state => ({})"
    ],
    "description": "react mapStateToProps"
  },
  "react mapDispatchToProps": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "mdtp",
    "body": [
      "const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))"
    ],
    "description": "react mapDispatchToProps"
  },
  "redux reducer": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "redr",
    "body": [
      "const initialState = {}\n\nexport default function $1 (state = initialState, action) {\n  switch (action.type) {\n    default:\n      return state\n  }\n}\n"
    ],
    "description": "redux reducer"
  },
  "redux thunk": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "thunk",
    "body": [
      "return async (dispatch, getState) => {\n  const state = getState()\n\n  $1\n}"
    ],
    "description": "redux thunk"
  },
  "describe": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "des",
    "body": [
      "describe('$1', () => {\n  $2\n})"
    ],
    "description": "describe"
  },
  "it": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "it",
    "body": [
      "it('should $1', () => {\n  $2\n})"
    ],
    "description": "it"
  },
  "expect": {
    "scope": "typescript,javascript,typescriptreact,javascriptreact",
    "prefix": "exp",
    "body": [
      "expect($1)"
    ],
    "description": "expect"
  },
  "constructor": {
    "prefix": "ctor",
    "body": [
      "constructor(...args) {",
      "  super(...args)",
      "  $0",
      "}"
    ]
  },
  "try/catch": {
    "prefix": "try",
    "body": [
      "try {",
      "  $1",
      "} catch (error) {",
      "  $0",
      "}"
    ]
  },
  "async function": {
    "prefix": "afun",
    "body": [
      "async function $1($2) {",
      "  $0",
      "}"
    ]
  },
  "throw log": {
    "prefix": "tl",
    "body": "throw new Error(JSON.stringify({$0}, null, 2))"
  },
  "spaced console.log": {
    "prefix": "scl",
    "body": [
      "console.log('**************************************************************************\\\\n\\\\n\\\\n')",
      "console.log($0)",
      "console.log('\\\\n\\\\n\\\\n**************************************************************************')"
    ]
  },
  "Switch Statement": {
    "prefix": "switch",
    "body": [
      "switch (${1:key}) {",
      "  case ${2:value}: {",
      "    $0",
      "    break",
      "  }",
      "  default: {",
      "    break",
      "  }",
      "}"
    ]
  },
  "Reducer": {
    "prefix": "reducer",
    "body": [
      "function ${1:someReducer}(state, action) {",
      "  switch (action.type) {",
      "    case ${2:'value'}: {",
      "      return $0",
      "    }",
      "    default: {",
      "      throw new Error(`Unhandled action type: ${action.type}`)",
      "    }",
      "  }",
      "}"
    ]
  },
  "Switch case": {
    "prefix": "case",
    "body": [
      "case ${2:'value'}: {",
      "  return $0",
      "}",
    ]
  },
  "React.useState": {
    "prefix": "us",
    "body": [
      "const [${1:state}, ${2:setState}] = React.useState($0)"
    ]
  },
  "React.useEffect": {
    "prefix": "uf",
    "body": [
      "React.useEffect(() => {",
      "  $0",
      "}, [])"
    ]
  },
  "React.useReducer": {
    "prefix": "ur",
    "body": [
      "const [state, dispatch] = React.useReducer(${1:someReducer}, {",
      "  $0",
      "})"
    ]
  },
  "React.useRef": {
    "prefix": "urf",
    "body": [
      "const ${1:someRef} = React.useRef($0)"
    ]
  },
  "React: componentWillMount": {
    "prefix": "cwm",
    "body": [
      "componentWillMount() {",
      "  $0",
      "}"
    ]
  },
  "React: componentDidMount": {
    "prefix": "cdm",
    "body": [
      "componentDidMount() {",
      "  $0",
      "}"
    ]
  },
  "React: componentWillReceiveProps": {
    "prefix": "cwrp",
    "body": [
      "componentWillReceiveProps(nextProps) {",
      "  $0",
      "}"
    ]
  },
  "React: componentWillUpdate": {
    "prefix": "cwu",
    "body": [
      "componentWillUpdate(nextProps, nextState) {",
      "  $0",
      "}"
    ]
  },
  "React: componentDidUpdate": {
    "prefix": "cdu",
    "body": [
      "componentDidUpdate(prevProps, prevState) {",
      "  $0",
      "}"
    ]
  },
  "React: componentWillUnmount": {
    "prefix": "cwu",
    "body": [
      "componentWillUnmount() {",
      "  $0",
      "}"
    ]
  },
  "Jest test": {
    "prefix": "test",
    "body": [
      "test('$1', () => {",
      "  $0",
      "})"
    ]
  },
  "Jest async test": {
    "prefix": "atest",
    "body": [
      "test('$1', async () => {",
      "  $0",
      "})"
    ]
  },
  "Mocha it block": {
    "prefix": "it",
    "body": [
      "it('should $1', () => {",
      "  $2",
      "})"
    ]
  },
  "Mocha describe block": {
    "prefix": "desc",
    "body": [
      "describe('$1', () => {",
      "  $2",
      "})"
    ]
  },
  "split-guide final": {
    "prefix": "sgf",
    "body": [
      "// FINAL_START",
      "$1",
      "// FINAL_END"
    ]
  },
  "split-guide workshop": {
    "prefix": "sgw",
    "body": [
      "// WORKSHOP_START",
      "$1",
      "// WORKSHOP_END"
    ]
  },
  "split-guide comment": {
    "prefix": "sgc",
    "body": [
      "// COMMENT_START",
      "$1",
      "// COMMENT_END"
    ]
  },
  // Lightning Web Components & SalesForce dev global snippets
  "lightning-web-component": {
    "prefix": "lwc",
    "body": [
      "import { LightningElement } from 'lwc';\n\nexport default class $1 extends LightningElement {}"
    ],
  }
}
```

# MOVE ON TO 🔥 [EXTRAS](./Extras.md)

# TO ROOT 🔨 [DEVELOPMENT](./Development.md)
