class WidgetsController < ApplicationController
  def index
    @widgets = [
      {
          id: 1,
          name: "First",
          description: "Test"
      },
      {
          id: 2,
          name: "Second",
          description: "Two"
      },
      {
          id: 3,
          name: "Last",
          description: "Last"
      }
    ]
  end
end
