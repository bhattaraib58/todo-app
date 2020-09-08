(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),c=a(13),l=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(14),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(u.a)(e),[{key:t.key,name:t.name,completed:t.completed}]);case"EDIT_TODO":return e.map((function(e){return e.key===t.key?{name:t.name,key:t.key}:e}));case"EDIT_STATUS":return e.map((function(e){return e.key===t.key&&(e.completed=!e.completed),e}));case"REMOVE_TODO":return e.filter((function(e){return e.key!==t.key}));default:return e}},h="SHOW_ALL",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},k=Object(l.b)({todos:o,visibilityFilter:d}),m=(a(26),a(27),a(2)),p=a(3),f=a(1),y=a(5),T=a(4),v=(a(28),a(29),function(e){Object(y.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSearchSubmit=n.handleSearchSubmit.bind(Object(f.a)(n)),n.handleSearchChange=n.handleSearchChange.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"handleSearchSubmit",value:function(e){e.preventDefault()}},{key:"handleSearchChange",value:function(e){var t=e.target.value;this.props.searchInput(t)}},{key:"render",value:function(){return s.a.createElement("header",{className:" header"},s.a.createElement("div",{className:"page-content"},s.a.createElement("h1",null,"TODO APP"),s.a.createElement("form",{onSubmit:this.handleSearchSubmit,className:"search-form clearfix"},s.a.createElement("input",{type:"text",placeholder:"Search",onChange:this.handleSearchChange,className:"search-box"}))))}}]),a}(s.a.Component)),b=(a(30),function(e){Object(y.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).createList=n.createList.bind(Object(f.a)(n)),n.deleteTask=n.deleteTask.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"deleteTask",value:function(e){this.props.deleteTask(e)}},{key:"editTask",value:function(e){this.props.editTask(e)}},{key:"editTaskStatus",value:function(e){this.props.editTaskStatus(e)}},{key:"createList",value:function(e){var t=this,a=new Date(e.key).toLocaleString();return s.a.createElement("li",{key:e.key,className:"clearfix"},s.a.createElement("span",{className:"task-status",onClick:function(){t.editTaskStatus(e.key)}},e.completed?s.a.createElement("i",{className:"fa fa-check-circle","aria-hidden":"true"}):s.a.createElement("i",{className:"fa fa-circle-thin","aria-hidden":"true"})),s.a.createElement("div",{className:"task"},s.a.createElement("h2",{className:e.completed?"task-completed":null},e.name),s.a.createElement("span",null,"Date Added: ",a)),s.a.createElement("button",{className:"remove-task",onClick:function(){window.confirm("Are you sure you wish to delete this item?")&&t.deleteTask(e.key)}},s.a.createElement("i",{className:"fa fa-trash"})),s.a.createElement("button",{className:"edit-task",onClick:function(){t.editTask(e.key)}},s.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})))}},{key:"render",value:function(){var e=this.props.tasks.map(this.createList);return e.length>0?s.a.createElement("ul",{className:"tasks"},e):s.a.createElement("div",{className:"empty-list"},"There is No Task In List")}}]),a}(s.a.Component)),E=(a(31),function(e){Object(y.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={tasks:[],categoryFiltered:[],searchFiltered:[],currentTask:null,isSearching:!1,searchCategory:"all"},n._inputElement=null,n.addTasks=n.addTasks.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n.deleteTask=n.deleteTask.bind(Object(f.a)(n)),n.editTaskStatus=n.editTaskStatus.bind(Object(f.a)(n)),n.editTask=n.editTask.bind(Object(f.a)(n)),n.handleTaskCategoryClick=n.handleTaskCategoryClick.bind(Object(f.a)(n)),n.searchInputData=n.searchInputData.bind(Object(f.a)(n)),n.getTasksToDisplay=n.getTasksToDisplay.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"addTasks",value:function(e){var t=this.state.tasks.slice(0),a={name:e,key:Date.now(),completed:!1};this.setState({tasks:t.concat(a)},this.handleTaskCategoryClick)}},{key:"deleteTask",value:function(e){var t=this.state.tasks.filter((function(t){return t.key!==e}));this.setState({tasks:t},this.handleTaskCategoryClick)}},{key:"editTaskStatus",value:function(e){var t=this.state.tasks.map((function(t){return t.key===e&&(t.completed=!t.completed),t}));this.setState({tasks:t},this.handleTaskCategoryClick)}},{key:"editTask",value:function(e){var t=this.state.tasks.find((function(t){return t.key===e}));this.setState({currentTask:t}),this._inputElement.value=t.name}},{key:"addEditedTask",value:function(e){var t={name:e,key:this.state.currentTask.key,completed:this.state.currentTask.completed},a=this.state.tasks.map((function(e){return e.key===t.key?t:e}));this.setState({currentTask:null,tasks:a},this.handleTaskCategoryClick)}},{key:"searchInputData",value:function(){var e=new RegExp(this.props.inputSearchData,"i"),t=this.state.categoryFiltered.filter((function(t){return e.test(t.name)})),a=this.props.inputSearchData.length>0;this.setState({searchFiltered:t,isSearching:a})}},{key:"handleTaskCategoryClick",value:function(e){var t=null;void 0===e&&(t="all"),!1===e&&(t="pending"),!0===e&&(t="completed");var a=this.state.tasks.filter((function(t){return void 0===e?t:e===t.completed}));this.setState({categoryFiltered:a,searchCategory:t},this.searchInputData)}},{key:"getTasksToDisplay",value:function(){return this.state.isSearching?this.state.searchFiltered:this.state.categoryFiltered}},{key:"handleSubmit",value:function(e){e.preventDefault(),/\S/.test(this._inputElement.value)&&(this.state.currentTask?this.addEditedTask(this._inputElement.value):this.addTasks(this._inputElement.value),this._inputElement.value="")}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"page-content task-content"},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"clearfix"},s.a.createElement("input",{type:"text",placeholder:this.state.currentTask?"Update Task":"Enter Task",ref:function(t){return e._inputElement=t}}),s.a.createElement("button",{type:"submit"},this.state.currentTask?s.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true"}):s.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"}))),s.a.createElement("div",{className:"task-tab clearfix"},s.a.createElement("button",{className:this.state.searchCategory.startsWith("all")?"active":null,onClick:function(){return e.handleTaskCategoryClick()}},"All Tasks"),s.a.createElement("button",{className:this.state.searchCategory.startsWith("pending")?"active":null,onClick:function(){return e.handleTaskCategoryClick(!1)}},"Pending"),s.a.createElement("button",{className:this.state.searchCategory.startsWith("completed")?"active":null,onClick:function(){return e.handleTaskCategoryClick(!0)}},"Completed")),s.a.createElement(b,{tasks:this.getTasksToDisplay(),editTaskStatus:this.editTaskStatus,deleteTask:this.deleteTask,editTask:this.editTask})))}}]),a}(s.a.Component)),S=function(e){Object(y.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={inputSearchData:""},n.todoAppRef=s.a.createRef(),n.searchInput=n.searchInput.bind(Object(f.a)(n)),n}return Object(p.a)(a,[{key:"searchInput",value:function(e){this.setState({inputSearchData:e},this.todoAppRef.current.searchInputData)}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(v,{searchInput:this.searchInput}),s.a.createElement(E,{inputSearchData:this.state.inputSearchData,ref:this.todoAppRef}))}}]),a}(s.a.Component),g=Object(l.c)(k);r.a.render(s.a.createElement(c.a,{store:g},s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c0002f0e.chunk.js.map