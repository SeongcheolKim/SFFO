import React from 'react'
import ReactDOM from 'react-dom'
class RadioForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: props.items,
      value: ''
    }
  }
  render () {
    // 라디오버튼을 생성
    const radiolist = this.state.items.map(i => {
      return (<div key={i}>
        <label>
          <input type='radio'
            name='items' value={i}
            checked={this.state.value === i}
            onChange={e => this.doChange(e)} /> {i}
        </label>
      </div>)
    })
    // 입력 양식에 라디오버튼 목록을 지정
    return (<div>
      <form onSubmit={e => this.doSubmit(e)}>
        {radiolist}
        <input type='submit' />
      </form>
    </div>)
  }
  // 라디오버튼을 변경
  doChange (e) {
    this.setState({ value: e.target.value })
  }
  // 입력 양식을 전송
  doSubmit (e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}
ReactDOM.render(
  <RadioForm items={['private', 'public', 'nothing']} />,
  document.getElementById('root'))
