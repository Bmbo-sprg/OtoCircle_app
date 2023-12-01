class Api::V1::ComposersController < ApplicationController
  before_action :set_composer, only: [:show, :destroy]

  def index
    @composers = Composer.all.order(created_at: :desc)
    render json: @composers, status: :ok
  end

  def create
    @composer = Composer.create!(name: composer_params[:name])
    user_ids = composer_params[:user_ids]
    user_ids.each do |user_id|
      @composer.users << User.find(user_id)
    end

    if @composer.present?
      render json: @composer, status: :created
    else
      render json: @composer.errors, status: :unprocessable_entity
    end
  end

  def show
    if @composer
      render json: @composer.as_json(include: [:users]), status: :ok
    else
      render json: @composer.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @composer.destroy
      render json: { message: 'Composer was successfully deleted.' }, status: :ok
    else
      render json: @composer.errors, status: :unprocessable_entity
    end
  end

  private

  def composer_params
    params.require(:composer).permit(:name, user_ids: [])
  end

  def set_composer
    @composer = Composer.find(params[:id])
  end
end
