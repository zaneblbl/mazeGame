/*
 * @Descripttion: 
 * @version: 
 * @Date: 2021-02-05 15:53:36
 * @Author: cell
 */
import React from 'react'
interface Props {
  endDate: string,
  timeout: any
}
interface State {
  now: any
}
class Login extends React.Component<Props, State>{
  readonly state: Readonly<State> = {
    now: ''
  }

  render():any{
    return (
      <div>login</div>
    )
  }

}

export default Login