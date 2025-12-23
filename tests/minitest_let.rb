module MinitestLet
  def let(name, &block)
    name = "__test_let_#{name}"
    define_method(name) do
      @__lets ||= {}
      @__lets[name] ||= block.call
    end

    def method_missing(meth, *args, &block)
      let_method = "__test_let_#{meth}"
      if @__lets[let_method]
        @__lets[let_method]
      else
        super
      end
    end
  end

  def let!(name, &block)
    let(name, &block)

    before { send(name) }
  end
end
