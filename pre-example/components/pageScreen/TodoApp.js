import React from 'react'

class TodoApp extends React.Component{
    constructor(){
        super();
        this.state ={
            text: {
                inputText : '',
                nameText : '',
            },
            //{id: number, text: string}
            todos: [
                {id: 1, text: 'buy iphone 11'},
                {id: 2, text: 'learn react'},
            ]
        }
    }
    // 多個表單元素使用同一個獲取值的方法
    handleTextChange = (event) =>{
        this.setState({  text: {
            // ES2018(ES9) Object Initializer 物件展開運算符
            ...this.state.text,
            //下面的[]不是陣列，而是叫計算得來的屬性名稱
            [event.target.name] : event.target.value
            }
        })
    }
    handleClick = (event) =>{
            // 建立新項目
            const newTodo = {
                //+強制轉換成數字
                id: +new Date(),
                text: this.state.text.nameText + ':' + this.state.text.inputText
            }
            // 加到陣列中
            this.setState({ 
                todos: [newTodo, ...this.state.todos]
            })

            // 清空文字輸入框
            this.setState({ text: {nameText: '', inputText: ''} })
    }

    render(){
        return (
            <>
                <h1>TodoApp</h1>
                姓名:
                <input type="text" 
                    value={this.state.text.nameText}
                    onChange={this.handleTextChange}
                    name="nameText"
                />
                <br/>
                做啥?
                <input type="text" 
                    value={this.state.text.inputText}
                    onChange={this.handleTextChange}
                    name="inputText"
                />
                <br/>
                <button onClick={this.handleClick}>join</button>

                <ul>
                   { this.state.todos.map((value, index)=>{
                       return <li key={value.id}>{value.text}</li>
                   })}
                </ul>
            </>
        )
    }
}

export default TodoApp