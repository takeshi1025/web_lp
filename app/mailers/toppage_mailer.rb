class ToppageMailer < ApplicationMailer
  def send_mail(toppage)
    @toppage = toppage
    mail to: ENV['TOMAIL'], subject: '【お問い合わせ】'
  end
end
