class Api::V1::CirclesController < ApplicationController
  before_action :set_circle, only: [:show, :update, :destroy]

  def index
    @circles = Circle.all.order(created_at: :desc).includes(:owner)
    render json: @circles.as_json(include: [:owner]), status: :ok
  end

  def create
    @circle = Circle.create!(circle_params)

    if @circle.present?
      render json: @circle, status: :created
    else
      render json: @circle.errors, status: :unprocessable_entity
    end
  end

  def show
    if @circle
      render json: @circle.as_json(include: [:users]), status: :ok
    else
      render json: @circle.errors, status: :unprocessable_entity
    end
  end

  def update
    if @circle.update(circle_params)
      render json: @circle, status: :ok
    else
      render json: @circle.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @circle.destroy
      render json: { message: 'Circle was successfully deleted.' }, status: :ok
    else
      render json: @circle.errors, status: :unprocessable_entity
    end
  end

  private

  def circle_params
    params.permit(:name, :owner_id)
  end

  def set_circle
    @circle = Circle.find(params[:id])
  end
end
