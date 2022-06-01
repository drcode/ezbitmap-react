# Introduction

The `ezbitmap-react` library lets you generate a beautiful image directly from ASCII art right inside of a React component. Go to the website [ezbitmap.com](https://ezbitmap.com) to see this library in action, and to use the ezbitmap art editor!

There is also a version of this library [for vanilla javascript programmers](https://github.com/drcode/ezbitmap), as well as one for [Clojure programmers](https://github.com/drcode/ezbitmap-clj).

Follow me on [twitter](https://twitter.com/lisperati) for any future news on this library.

# Installation

This is an NPM library, [available here](https://www.npmjs.com/package/@lisperati/ezbitmap-react).

Simply load the library into your web app via:

```
npm add @lisperati/ezbitmap-react
```

Now, you can create javascript imagedata directly from ASCII art in your React app:


```javascript
import Ezbitmap from '@lisperati/ezbitmap-react';

function App() {
  return <Ezbitmap>
   {String.raw`
        __,---.      
       /__|o\  )     
       "--\ / /      
          ,|^:\
         //   \\     
        {(     )}    
      #===M===M===#
          T|||T
          |||||
          |||||
           T|T      
           |||       
            U        
     `}
  </Ezbitmap>;
}

export default App;
```

This is what you will see after running this code:

![alt text](https://github.com/drcode/ezbitmap/blob/master/screenshot.png?raw=true)

A full working example is in the `example` directory.

# License

This library is open source under the Eclipse Public License 1.0
