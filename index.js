//This is a stateless component or pure component (just render something)
function TodoList(todos){
   console.log(todos);
   return(
      <ul>
         <li>TODO LIST</li>
      </ul>
   );
}

class AppComponent extends React.Component{
   constructor(props) {
      super(props);

      // underscore means that it's private
      this._nextTodoId = 1;
      this.state = {
         filter: { showCompleted: true},
         todos: [
            {id: this._nextTodoId++, text: "Hey!", isCompleted: false},
            {id: this._nextTodoId++, text: "Blabla", isCompleted: true},
            {id: this._nextTodoId++, text: "Stuff", isCompleted: true},
            {id: this._nextTodoId++, text: "Things!", isCompleted: false}
         ]
      };

      this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
   }

   render() {
      const {filter, todos} = this.state;
      const filteredTodos = filter.showCompleted
         ? todos
         : todos.filter(todo => !todo.isCompleted);

      return(
         <div>
            <h2>Todo List</h2>
            <label>
               Show Completed
               <input type="checkbox" checked={filter.showCompleted} onChange={this._onShowCompletedChanged} />
            </label>
            <TodoList todos={filteredTodos} />
         </div>
      );
   }

   _onShowCompletedChanged(e) {
      this.setState({
         filter: {showCompleted: e.target.checked}
      });
   }
}

ReactDOM.render(<AppComponent />, document.getElementById("app"));
