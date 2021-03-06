{
  "START" : {
    "type" : START_TYPE, 
    "link" : {
      "direction"   : TO, 
      "linkPartner" : HAUPTKLASSEN_ALIAS
    }
  },
  
  "SUBJECTS": [  
    {
      "alias"                : ALIAS,
      "label"                : LABEL,
      "uri"                  : URI,     
      "comment"              : COMMENT,
      "view"                 : BOOLEAN,
      "showAdditionalFields" : BOOLEAN,
      "properties"           : [
        { "alias"         : ALIAS,
	  "uri"           : URI_PROPERTY,
	  "type"          : PROPERTY_TYPE,     
          "propertyRange" : PROPERTY_RANGE,          
          "view"          : BOOLEAN,
          "operator"      : OPERATOR,          
          "link"          : {
	    "direction"     : TO_OR_FROM, 
	    "linkPartner"   : KLASSEN_ALIAS
	  },
          "arithmetic"    : {
	    "operator"      : OPERATOR, 
	    "amount"        : VALUE
	  },
          "compare"       : {
	    "operator"      : OPERATOR, 
	    "amount"        : VALUE
	  }
        },
        { "alias"         : ALIAS,
	  "uri"           : URI_PROPERTY,
	  "type"          : PROPERTY_TYPE,
          ...
        }, 
	  ...
      ]     
    },                       
    {
      "alias"                : ALIAS,
      "label"                : LABEL,
      "uri"                  : URI,     
      "comment"              : COMMENT,
      "view"                 : BOOLEAN,
      "showAdditionalFields" : BOOLEAN,
      "properties"           : [ ... ]
    },
      ...
  ]
}