class Api::TodosController < ApplicationController
  def index
    @todos = Todo.all

    render json: @todos
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo
    end
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
    end
  end

  def destroy
    @todo = Todo.find(params[:id])

    if @todo.destroy
      render json: @todo
    end
  end

  private

    def todo_params
      params.permit(:title, :body, :done)
    end
end
