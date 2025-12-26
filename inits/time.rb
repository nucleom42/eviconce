class Time
  def days_seconds
    hour * 3600 + min * 60 + sec
  end

  def beginning_of_day
    Time.new(year, month, day, 0, 0, 0)
  end

  def end_of_day
    Time.new(year, month, day, 23, 59, 59)
  end

  def at(hr, mn, sc)
    Time.new(year, month, day, hr, mn, sc)
  end

  def add_days(days)
    self + days * 86_400
  end

  def subtract_days(days)
    self - days * 86_400
  end

  def closest_future_working_day
    target_day = self
    target_day = target_day.add_days(1) while target_day.wday == 6 || target_day.wday == 7
    target_day
  end

  class << self
    def today
      Time.now
    end

    def tomorrow
      today.add_days(1)
    end

    def beginning_of_today
      new(Time.now.year, Time.now.month, Time.now.day, 0, 0, 0)
    end

    def end_of_today
      new(Time.now.year, Time.now.month, Time.now.day, 23, 59, 59)
    end
  end
end
