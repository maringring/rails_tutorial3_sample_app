# メインのサンプルユーザーを1人作成する
User.create!(name:  "maru",
             email: "maru@test.com",
             password:              "hyerinlove",
             password_confirmation: "hyerinlove",
             admin: true)

# 追加のユーザーをまとめて生成する
98.times do |n|
  name  = Faker::Name.name
  email = "example#{n+1}@test.com"
  password = "password"
  User.create!(name:  name,
               email: email,
               password:              password,
               password_confirmation: password)
end
