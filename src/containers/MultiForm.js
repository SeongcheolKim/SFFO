import React, {Component} from 'react'
// 여러 개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      e_mail: '',
      phone_number: ''
    }
  }
  // 값이 변경됐을 때
  doChange (e) {
    const userValue = e.target.value
    const key = e.target.name
    this.setState({[key]: userValue})
  }
  // 전송 버튼
  doSubmit (e) {
    e.preventDefault()
    const j = JSON.stringify(this.state)
    window.alert(j)
  }
  // 화면 렌더링
  render () {
    // 이벤트를 메서드에 바인딩
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
      <form onSubmit={doSubmit}>
        <div><label>
          이름: <br />
          <input name='name'
            type='text'
            value={this.state.name}
            onChange={doChange} />
        </label></div>
        <div><label>
          e-mail: <br />
          <input name='e-mail'
            type='text'
            value={this.state.age}
            onChange={doChange} />
        </label></div>
        <div><label>
          phone_number: <br />
          <input name='phone_number'
            type='text'
            value={this.state.hobby}
            onChange={doChange} />
        </label></div>
        <input type='submit' value='전송' />
      </form>
    )
  }
}
