## Classes

<dl>
<dt><a href="#App">App</a> ⇐ <code>Component</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#Button">Button(props)</a> ⇒ <code>JSX</code></dt>
<dd><p>The Button component.</p>
</dd>
<dt><a href="#Input">Input(count, handleChange)</a> ⇒ <code>JSX</code></dt>
<dd><p>The Input Component.</p>
</dd>
</dl>

<a name="App"></a>

## App ⇐ <code>Component</code>
**Kind**: global class  
**Extends**: <code>Component</code>  

* [App](#App) ⇐ <code>Component</code>
    * [new App()](#new_App_new)
    * [.module.exports](#App.module.exports)
        * [new module.exports()](#new_App.module.exports_new)
    * [.this.state](#App.this.state)
    * [.handleChange](#App.handleChange)
    * [.handleAdd](#App.handleAdd)
    * [.handleSubstract](#App.handleSubstract)
    * [.render()](#App.render) ⇒ <code>JSX</code>

<a name="new_App_new"></a>

### new App()
The App Component.

<a name="App.module.exports"></a>

### App.module.exports
**Kind**: static class of [<code>App</code>](#App)  
<a name="new_App.module.exports_new"></a>

#### new module.exports()
Creates an instance of App.

<a name="App.this.state"></a>

### App.this.state
The App initial state.

**Kind**: static property of [<code>App</code>](#App)  
<a name="App.handleChange"></a>

### App.handleChange
Handles the state change of the input element.

**Kind**: static property of [<code>App</code>](#App)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The change event. |

<a name="App.handleAdd"></a>

### App.handleAdd
Handles the add action in the Button.

**Kind**: static property of [<code>App</code>](#App)  
<a name="App.handleSubstract"></a>

### App.handleSubstract
Handles the Substract action in the Button.

**Kind**: static property of [<code>App</code>](#App)  
<a name="App.render"></a>

### App.render() ⇒ <code>JSX</code>
Renders the App Component.

**Kind**: static method of [<code>App</code>](#App)  
**Returns**: <code>JSX</code> - The App component to render.  
<a name="Button"></a>

## Button(props) ⇒ <code>JSX</code>
The Button component.

**Kind**: global function  
**Returns**: <code>JSX</code> - The Button to render.  

| Param | Type |
| --- | --- |
| props | <code>Object</code> | 

<a name="Input"></a>

## Input(count, handleChange) ⇒ <code>JSX</code>
The Input Component.

**Kind**: global function  
**Returns**: <code>JSX</code> - The JSX element to render.  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>Number</code> | The count value to show on the input. |
| handleChange | <code>function</code> | The function to handle the onChange action. |

