// function component + memo == class component + PureComponent

import React, { memo } from 'react';

const habitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };
  return (
    <>
      <form ref={formRef} className="add-form" onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type="text"
          className="add-input"
          placeholder="습관을 입력하세요"
        />
        <button className="add-button">Add</button>
      </form>
    </>
  );
});

export default habitAddForm;

// import React, { PureComponent } from 'react';

// class HabitAddForm extends PureComponent {
//   inputRef = React.createRef();
//   formRef = React.createRef();
//   onSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     this.formRef.current.reset();
//   };
//   render() {
//     return (
//       <>
//         <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//           <input
//             ref={this.inputRef}
//             type="text"
//             className="add-input"
//             placeholder="습관을 입력하세요"
//           />
//           <button className="add-button">Add</button>
//         </form>
//       </>
//     );
//   }
// }

// export default HabitAddForm;
