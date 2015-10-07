class Api::StepsController < ApplicationController
  def index
    @steps = Step.all

    render json: @steps
  end

  def create
    @step = Step.new(step_params)

    if @step.save
      render json: @step
    end
  end

  def update
    @step = Step.find(id)

    if @step.update(step_params)
      render json: @step
    end
  end

  def destroy
    @step = Step.find(id)

    if @step.destroy
      render json: @step
    end
  end

  private

    def step_params
      params.permit(:body, :todo_id, :done)
    end
end
