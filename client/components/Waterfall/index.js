import React from 'react';

export default class Waterfall extends React.Component {

  constructor(props) {
    super(props);
    this.columnHeights = Array.from({ length: props.columns }, () => 0);
    this.renderItem = this.renderItem.bind(this);
  }

  /*
   * Get the shortest column in the list of columns heights
   */
  getShortestColumn() {
    const minValue = Math.min(...this.columnHeights);
    return this.columnHeights.indexOf(minValue);
  }

  /*
   * Determine the top and left positions of the grid item. Update the
   * cached column height.
   * @param {Object} item - the grid item
   * @param {Object} item.height - the grid item's image height
   * @param {Object} item.width - the grid item's image width
   */
  getItemStyle(item) {
    const { columnWidth, gutter } = this.props;
    const shortestColumnIndex = this.getShortestColumn();
    const left = (columnWidth + gutter) * shortestColumnIndex;
    const top = this.columnHeights[shortestColumnIndex];
    const normalizedHeight = (columnWidth / item.width) * item.height;
    this.columnHeights[shortestColumnIndex] += normalizedHeight + gutter;
    return {
      left: `${left}px`,
      top: `${top}px`,
      position: `absolute`
    };
  }

  /*
   * Render helper for an individual grid item
   * @param {Object} item - the grid item to render
   * @param {Object} item.url - the image src url
   */
  renderItem(item, index) {
    return (
      <img className="ImageLayout__item"
        src={item.url}
        width={this.props.columnWidth}
        style={this.getItemStyle(item)}
        key={index} />
    );
  }

  render() {
    const { items } = this.props;
    return (
      <div className="ImageLayout" style={{ position: 'relative' }}>
        {items.map(this.renderItem)}
      </div>
    )
  }
}