class String
  TRANSLIT_MAP = {
    # Ukrainian + Russian common
    "а" => "a", "б" => "b", "в" => "v", "г" => "g", "д" => "d", "е" => "e", "ё" => "yo", "є" => "ie", "ж" => "zh",
    "з" => "z", "и" => "y", "і" => "i", "ї" => "yi", "й" => "y", "к" => "k", "л" => "l", "м" => "m", "н" => "n",
    "о" => "o", "п" => "p", "р" => "r", "с" => "s", "т" => "t", "у" => "u", "ф" => "f", "х" => "kh", "ц" => "ts",
    "ч" => "ch", "ш" => "sh", "щ" => "shch", "ъ" => "", "ы" => "y", "ь" => "", "э" => "e", "ю" => "yu", "я" => "ya",

    # uppercase
    "А" => "A", "Б" => "B", "В" => "V", "Г" => "G", "Д" => "D", "Е" => "E", "Ё" => "Yo", "Є" => "Ye", "Ж" => "Zh",
    "З" => "Z", "И" => "Y", "І" => "I", "Ї" => "Yi", "Й" => "Y", "К" => "K", "Л" => "L", "М" => "M", "Н" => "N",
    "О" => "O", "П" => "P", "Р" => "R", "С" => "S", "Т" => "T", "У" => "U", "Ф" => "F", "Х" => "Kh", "Ц" => "Ts",
    "Ч" => "Ch", "Ш" => "Sh", "Щ" => "Shch", "Ъ" => "", "Ы" => "Y", "Ь" => "", "Э" => "E", "Ю" => "Yu", "Я" => "Ya"
  }.freeze

  def urlize
    strip
      .transliterate
      .downcase
      .gsub(/[^a-z0-9]/, '-')
      .gsub(/^-|-$/, '')
  end

  def transliterate
    # fast path: if already ASCII, return as-is
    return self if ascii_only?

    chars.map { |char| TRANSLIT_MAP.fetch(char, char) }.join
  end
end
