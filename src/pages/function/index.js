import React, { useEffect } from 'react';
import { WingBlank, WhiteSpace, List } from 'antd-mobile'
import { Link } from 'umi'

export default function(props){
  // const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div>
      <WingBlank>
        <List>
          <List.Item>
            <Link to='/function/hook'>hook</Link>
          </List.Item>
          <List.Item>
            <Link to='/function/context'>context</Link>
          </List.Item>
          <List.Item>
            <Link to='/function/customize'>context</Link>
          </List.Item>
        </List>  
      </WingBlank>
      <WhiteSpace/>
    </div>
  )
}