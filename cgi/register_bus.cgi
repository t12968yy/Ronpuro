#!/usr/bin/env perl
use warnings;
use strict;


my $alldata;
my %in;

my $output_cgi = "";
my $output_file = "";

$output_cgi .= "Content-Type: text/html; charset=UTF-8\n\n";
$output_cgi .= "<html>\n";
$output_cgi .= "<head><title>フォームサンプル</title></head>\n";
$output_cgi .= "<body>\n";

#送信されたデータを受け取る
if ($ENV{'REQUEST_METHOD'} eq 'POST') {
  read(STDIN, $alldata, $ENV{'CONTENT_LENGTH'});
} else {
  $alldata = $ENV{'QUERY_STRING'};
}
foreach my $data (split(/&/, $alldata)) {
	my ($key, $value) = split(/=/, $data);

  $value =~ s/\+/ /g;
  $value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack('C', hex($1))/eg;
  $value =~ s/\t//g;

  $in{"$key"} = $value;
}

if ( $in{day} eq "平日") {
	$in{day} = "Weekday";
}
elsif ( $in{day} eq "土曜"){
	$in{day} = "Saturday";
}
elsif ( $in{day} eq "日曜" ) {
	$in{day} = "Sunday";
}
else {
	$in{day} = "ERROR";
}

#受け取ったデータをCGI用に表示
$output_cgi .= "\t\'Name\' : \'".$in{bus_stop_name}."\',\n<br/>";
$output_cgi .= "\t\'Destination\' : \{\n<br/>";
$output_cgi .= "\t\t\'".$in{destination}."\' \: \{\n<br/>";
$output_cgi .= "\t\t\t\'".$in{status}."\' : \{\n<br/>";
$output_cgi .= "\t\t\t\t\'Time\' : {\n<br/>";
$output_cgi .= "\t\t\t\t\t\'".$in{day}."\' : \[\n<br/>";
my $timeframe_cgi = "";
for ( my $i = 3; $i < 27; $i++ ) {
	if( length $i ==1 ) { $i = "0".$i;}
	my $query = "r".$i;
	$timeframe_cgi .= "\t\t\t\t\t\t\[".$i.",".$in{$query}."\]\,\n<br/>";
}
chop $timeframe_cgi;
$output_cgi .= "$timeframe_cgi\n<br/>";
$output_cgi .= "\t\t\t\t\t\]<br/>";
$output_cgi .= "\t\t\t\t\}\n\t\t\t\}\n\t\t\}\n\t\}\n\}\n<br/>";
$output_cgi .= "</body>\n";
$output_cgi .= "</html>\n";
$output_cgi .= "Adminの確認次第このデータが登録されます。<br/>";
$output_cgi .= "緊急を要していましたら、".'t12968yy@sfc.keio.ac.jp'."に一報をお願いします。<br/>";
$output_cgi .= "<a href=\"./../bus.html\">戻る</a><br/>";
print $output_cgi;

$output_file .= ~~localtime."\n";
$output_file .= "\t\'Name\' : \'".$in{bus_stop_name}."\',\n<br/>";
$output_file .= "\t\'Destination\' : \{\n<br/>";
$output_file .= "\t\t\'".$in{destination}."\' \: \{\n<br/>";
$output_file .= "\t\t\t\'".$in{status}."\' : \{\n<br/>";
$output_file .= "\t\t\t\t\'Time\' : {\n<br/>";
$output_file .= "\t\t\t\t\t\'".$in{day}."\' : \[\n<br/>";
my $timeframe_file = "";
for ( my $i = 3; $i < 27; $i++ ) {
	if( length $i ==1 ) { $i = "0".$i;}
	my $query = "r".$i;
	$timeframe_file .= "\t\t\t\t\t\t\[".$i.",".$in{$query}."\]\,\n<br/>";
}
#chop $timeframe_file;
$output_file .= "$timeframe_file<br/>";
$output_file .= "\t\t\t\t\t\]\n<br/>";
$output_file .= "\t\t\t\t\}\n\t\t\t\}\n\t\t\}\n\t\}\n\}\n<br/>";
$output_file =~ s/<br\/>//g;

unless ( -e "./../data/request.txt") {
	open (OUT, "> ./../data/request.txt") or die "print $!\n ";
}
else {
	open (OUT, ">> ./../data/request.txt") or die "print $!\n ";
}
print OUT $output_file;
close (OUT);


exit;
