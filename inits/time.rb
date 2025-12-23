class Time
  def days_seconds
    hour * 3600 + min * 60 + sec
  end

  def beginning_of_day
    new(year, month, day, 0, 0, 0)
  end

  def end_of_day
    new(year, month, day, 23, 59, 59)
  end

  class << self
    def beginning_of_today
      new(Time.now.year, Time.now.month, Time.now.day, 0, 0, 0)
    end

    def end_of_today
      new(Time.now.year, Time.now.month, Time.now.day, 23, 59, 59)
    end
  end
end
