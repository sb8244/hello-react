var WidgetsListElement = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <li>
      { this.props.name } - { this.props.description }
      </li>
    );
  }
});

var WidgetsList = React.createClass({
  render: function() {
    var widgets = this.props.widgets;

    return (
      <ul id="widgets-list">
        {widgets.map(function(widget) {
          return <WidgetsListElement key={widget.id} name={widget.name} description={widget.description} />;
        })}
      </ul>
    );
  }
});
