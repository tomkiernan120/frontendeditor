import React from 'react';

var loadData = {
  blocks: [
    {
      type: "text",
      contents: '',
      size: 'regular'
    },
    {
      type:'image',
      contents: '',
      size: 'large'
    },
    {
      type: 'text',
      contents: '',
      size: 'regular'
    }
  ],
}

import Block from './Components'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...loadData
    };

  }

  render() {
    return (
      <div className="container">
        <div className="inner">

          {this.blocks.length this.blocks.map( (e, i) => {
            <Block type={e.type} contents={e.contents} size={e.size} />
          })}

        </div>
      </div>
    )
  }
}