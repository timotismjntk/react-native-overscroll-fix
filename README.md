# @timotismjntk/react-native-overscroll-fix

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Introduction
OverScroll support bounce feature for Android ScrollView.

## Installation
```
npm install @timotismjntk/react-native-overscroll-fix --save
```
or
```
yarn add @timotismjntk/react-native-overscroll-fix
```

## Usage
``` js
import OverScroll from '@timotismjntk/react-native-overscroll-fix'

export default function App() {
  return (
    <OverScroll style={styles.container}>
        <ScrollView>
          ...
        </ScrollView>
    </OverScroll>
  );
}
```

## License
This library is distributed under MIT Licence.
