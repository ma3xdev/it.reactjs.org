class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        Ciao {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Claudia" />,
  document.getElementById('hello-example')
);
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> 26a870e1c6e232062b760d37620d85802750e985
