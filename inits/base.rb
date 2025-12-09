# Extensions
using ChargedHash                            # Enabling string/sym agnostic hash
using ChargedString                          # Enabling additinal string apis
# SequelObject
Rubee::SequelObject.validate_after_setters   # Triger validation after assigning attribute
Rubee::SequelObject.validate_before_persist! # Raise before persisting to db if invalid
