class Api::V1::MusicsController < ApplicationController
  before_action :set_music, only: [:show, :destroy]

  def index
    @musics = Music.all.order(created_at: :desc).includes(:composer)
    render json: @musics.as_json(include: [:composer]), status: :ok
  end

  def create
    @music = Music.new(music_params)
    if @music.save
      render json: @music, status: :created
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  def show
    if @music
      render json: @music.as_json(include: [:composer]), status: :ok
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @music.destroy
      render json: { message: 'Music was successfully deleted.' }, status: :ok
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  private

  def music_params
    params.permit(:name, :composer_id, :length, :bpm, :lyrics, :description, :visible_to)
  end

  def set_music
    @music = Music.find(params[:id])
  end
end
