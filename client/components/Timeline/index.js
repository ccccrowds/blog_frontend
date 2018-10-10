import React, { PureComponent } from 'react'
import './index.scss'

export default class Timeline extends PureComponent {
  render() {
    const { data, render } = this.props
    return (
      <div className="timeline-wrap">
        {
          data.map(item => {
            return <div key={item._id} id={item._id} className="timeline__item">
              <h3 className="timeline__item__title">{item._id}</h3>
              <div>
                {
                  item.list.map(article => <div
                    className="timeline__item__article"
                    key={article._id}>
                    {render(article, item)}
                  </div>)
                }
              </div>
            </div>
          })
        }
      </div>
    )
  }
}
