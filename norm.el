(defun Anfuehrung ()
  (interactive)
  (save-excursion (query-replace-regexp "\"\\([^\"]+\\)\"" "{\\\\glqq}\\1{\\\\grqq}"))
  (save-excursion (query-replace-regexp "“\\([^”]+\\)”" "{\\\\glqq}\\1{\\\\grqq}"))
)

(defun GSBL ()
  (interactive)
  (save-excursion (query-replace-regexp 
                   "[Gg][Ss][Bb][Ll]"
                   "GSBL"))
)

(defun vereinheitlichung ()
  (interactive)
  (save-excursion (query-replace-regexp "\\([sS]\\)ubjekten" "subjects"))
  (save-excursion (query-replace-regexp "\\([sS]\\)ubjekte" "subjects"))
  (save-excursion (query-replace-regexp "\\([sS]\\)ubjekt" "subject"))
  (save-excursion (query-replace-regexp "[Ee]igenschaften" "properties"))
  (save-excursion (query-replace-regexp "[Ee]igenschaft[s]*" "property"))
)