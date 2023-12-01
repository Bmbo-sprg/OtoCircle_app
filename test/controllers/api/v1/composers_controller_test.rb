require "test_helper"

class Api::V1::ComposersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_composers_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_composers_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_composers_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_composers_destroy_url
    assert_response :success
  end
end
