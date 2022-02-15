class ToppagesController < ApplicationController
  def index
    @toppage = Toppage.new
  end

  def new
    @toppage = Toppage.new
  end

  # 確認画面を作成する場合はこのような記述になるかと思います。
  # newアクションから入力内容を受け取り、
  # 送信ボタンを押されたらcreateアクションを実行します。
  def confirm
    @toppage = Toppage.new(toppage_params)
    if @toppage.invalid?
      render :new
    end
  end

  # 入力内容に誤りがあった場合、
  # 入力内容を保持したまま前のページに戻るのが当たり前になっているかと思いますが、
  # backアクションを定義することで可能となります。
  def back
    @toppage = Toppage.new(toppage_params)
    render :new
  end

  # 実際に送信するアクションになります。
  # ここで初めて入力内容を保存します。
  # セキュリティーのためにも一定時間で入力内容の削除を行ってもいいかもしれません。
  def create
    @toppage = Toppage.new(toppage_params)
    if @toppage.save
      ToppageMailer.send_mail(@toppage).deliver_now
      redirect_to done_path
    else
      render :new
    end
  end

  # 送信完了画面を使用する場合お使いください。
  def done
  end

  private

  def toppage_params
    params.require(:toppage)
          .permit(:email,
                  :name,
                  :phone_number,
                  :subject,
                  :message
                  )
  end
end
