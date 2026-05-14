(function () {
  "use strict";

  const radioactiveBiographyReceipts = [
    {
      title: ["QWJvdX", "QgdGhl", "IE9wZXJhdG9y"],
      paragraphs: [
        ["TXkgbm", "FtZSBpcyBC", "b3JpcyBIYW5pY290dGUu"],
        "SSB1c2VkIHRvIHdvcmsgaW4gbWVkaWNhbCB0ZWNobmljYWwgc3VwcG9ydC4gTm93IEkgc3R1ZHkgc29mdHdhcmUgZGV2ZWxvcG1lbnQgYXQgNDIgTWFyc2VpbGxlLCB3aGVyZSBJIHNwZW5kIGEgbGFyZ2UgYW1vdW50IG9mIHRpbWUgbmVnb3RpYXRpbmcgd2l0aCBwb2ludGVycywgdGVybWluYWxzLCBicm9rZW4gaW50ZXJmYWNlcyBhbmQgdGhlIHF1aWV0IHZpb2xlbmNlIG9mIG15IG93biBleGVjdXRpb24gc3RhY2su",
        "SSBkaWQgbm90IGFycml2ZSBpbiBzb2Z0d2FyZSB0aHJvdWdoIGEgc3RyYWlnaHQgbGluZS4gQmVmb3JlIGNvZGUsIHRoZXJlIHdlcmUgbWFjaGluZXMsIHVzZXJzLCBtZWRpY2FsIGVudmlyb25tZW50cywgc3VwcG9ydCB0aWNrZXRzLCBwcmFjdGljYWwgZW1lcmdlbmNpZXMgYW5kIHByb2JsZW1zIHRoYXQgZGlkIG5vdCBjYXJlIGFib3V0IHRoZW9yeS4gU29tZXRoaW5nIHdhcyBicm9rZW4uIFNvbWVvbmUgbmVlZGVkIGl0IGZpeGVkLiBUaGUgc3lzdGVtIGhhZCB0byBrZWVwIG1vdmluZy4=",
        "VGhhdCBwcm9iYWJseSBzaGFwZWQgdGhlIHdheSBJIGJ1aWxkIHRoaW5ncyBub3cu"
      ]
    },
    {
      title: "UHJldmlvdXMgTGlmZQ==",
      paragraphs: [
        "VGVjaG5pY2FsIHN1cHBvcnQgdGVhY2hlcyBhIHN0cmFuZ2Uga2luZCBvZiBodW1pbGl0eS4=",
        "WW91IGxlYXJuIHRoYXQgYSBzeXN0ZW0gY2FuIGZhaWwgZm9yIHJlYXNvbnMgbm9ib2R5IGV4cGVjdGVkLiBZb3UgbGVhcm4gdGhhdCBkb2N1bWVudGF0aW9uIGlzIG9mdGVuIGEgcHJheWVyIHdyaXR0ZW4gYWZ0ZXIgdGhlIGRpc2FzdGVyLiBZb3UgbGVhcm4gdGhhdCBwZW9wbGUgZG8gbm90IG5lZWQgeW91IHRvIHNvdW5kIGJyaWxsaWFudC4gVGhleSBuZWVkIHRoZSB0aGluZyB0byB3b3JrIGFnYWluLg==",
        "TWVkaWNhbCBlbnZpcm9ubWVudHMgbWFkZSB0aGF0IGZlZWxpbmcgc2hhcnBlci4gQmVoaW5kIGV2ZXJ5IHRpY2tldCwgbWFjaGluZSwgYWNjb3VudCwgY2FibGUsIHNjcmVlbiBvciBzdHJhbmdlIGVycm9yIG1lc3NhZ2UsIHRoZXJlIHdhcyB1c3VhbGx5IGEgcmVhbCBwZXJzb24gd2FpdGluZy4gTm90IGFuIGFic3RyYWN0IHVzZXIuIEEgcGVyc29uLg==",
        "VGhhdCBzdGF5ZWQgd2l0aCBtZS4=",
        "SSBzdGlsbCB0ZW5kIHRvIHNlZSB0ZWNobm9sb2d5IGFzIHNvbWV0aGluZyB0aGF0IHNob3VsZCByZWR1Y2UgcHJlc3N1cmUsIG5vdCBpbmNyZWFzZSBpdC4gQSB0b29sIHNob3VsZCBtYWtlIHRoZSBkYXkgbGlnaHRlci4gQW4gaW50ZXJmYWNlIHNob3VsZCBub3QgYmVoYXZlIGxpa2UgYSBsb2NrZWQgZG9vciBwcmV0ZW5kaW5nIHRvIGJlIGEgZGFzaGJvYXJkLg=="
      ]
    },
    {
      title: "Q3VycmVudCBTeXN0ZW0=",
      paragraphs: [
        "SSBhbSBub3cgc3R1ZHlpbmcgc29mdHdhcmUgZGV2ZWxvcG1lbnQgYXQgNDIgTWFyc2VpbGxlLg==",
        "SXQgaXMgYSBzdHJhbmdlIGFuZCB1c2VmdWwgcGxhY2UgdG8gcmVidWlsZCB5b3Vyc2VsZi4gVGhlcmUgYXJlIG5vIHRyYWRpdGlvbmFsIHRlYWNoZXJzIHN0YW5kaW5nIGluIGZyb250IG9mIGEgYm9hcmQuIFRoZXJlIGFyZSBwcm9ibGVtcywgcGVlcnMsIHRlcm1pbmFscywgbWlzdGFrZXMsIGNvcnJlY3Rpb25zLCByZXRyaWVzLCBhbmQgdGhlIHNsb3cgcmVhbGl6YXRpb24gdGhhdCBjb21wdXRlcnMgZG8gZXhhY3RseSB3aGF0IHlvdSB3cm90ZSwgbm90IHdoYXQgeW91IG1lYW50Lg==",
        "SSB3cml0ZSBDLCBQeXRob24sIEphdmFTY3JpcHQsIEhUTUwgYW5kIENTUy4gSSBidWlsZCBzbWFsbCB0b29scywgd2Vic2l0ZXMsIHNjcmlwdHMsIGludGVyZmFjZXMsIHZpc3VhbCBleHBlcmltZW50cywgYXVkaW8gdXRpbGl0aWVzIGFuZCBzeXN0ZW1zIHRoYXQgd2VyZSBwcm9iYWJseSBzdXBwb3NlZCB0byByZW1haW4gc21hbGxlci4=",
        "U29tZSBvZiBteSBwcm9qZWN0cyBhcmUgcHJhY3RpY2FsLiBTb21lIGFyZSBhcnRpc3RpYy4gU29tZSBhcmUgZGVlcGx5IHVubmVjZXNzYXJ5IGluIHRoZSB3YXkgdGhhdCBvbmx5IHNpbmNlcmUgdGhpbmdzIGNhbiBiZS4="
      ]
    },
    {
      title: "VGhpbmdzIEkgQnVpbGQ=",
      paragraphs: [
        "SSBidWlsZCB0b29scyBiZWNhdXNlIGZyaWN0aW9uIGFubm95cyBtZS4=",
        "SSBidWlsZCBpbnRlcmZhY2VzIGJlY2F1c2UgYmFkIGludGVyZmFjZXMgYW5ub3kgbWUgbW9yZS4=",
        "SSBidWlsZCBzbWFsbCB1dGlsaXRpZXMgYmVjYXVzZSBhIHJlcGV0aXRpdmUgdGFzayBpcyBzb21ldGltZXMganVzdCBhIHRpbnkgcHJpc29uIHdpdGggYSBwcm9ncmVzcyBiYXIu",
        "QSBsb3Qgb2YgbXkgcHJvamVjdHMgc3RhcnQgd2l0aCBhIHNpbXBsZSBpcnJpdGF0aW9uLg==",
        "QSBmaWxlIGZvcm1hdCBiZWhhdmVzIGJhZGx5LgpBIHNjaG9vbCB3b3Jrc3RhdGlvbiBiZWNvbWVzIHBhaW5mdWwgdG8gdXNlLgpBbiBpbnRlcmZhY2UgaGlkZXMgdXNlZnVsIGluZm9ybWF0aW9uLgpBIHJlcGV0aXRpdmUgdGFzayB3YXN0ZXMgZXZlcnlvbmXigJlzIHRpbWUuCkEgc21hbGwgcHJvYmxlbSBzdXJ2aXZlcyBmb3IgdG9vIGxvbmcgYmVjYXVzZSBub2JvZHkgZmVsdCBsaWtlIGdpdmluZyBpdCBhIHNoYXBlLg==",
        "U28gSSBnaXZlIGl0IGEgc2hhcGUu",
        "U29tZXRpbWVzIHRoYXQgc2hhcGUgaXMgYSBQeXRob24gdG9vbC4gU29tZXRpbWVzIGl0IGlzIGEgc3RhdGljIHdlYnNpdGUuIFNvbWV0aW1lcyBpdCBpcyBhbiBlZGl0b3IsIGEgc2NyaXB0LCBhIGJyb3dzZXIgdXRpbGl0eSwgYSBzb3VuZCBleHBlcmltZW50LCBhIHZpc3VhbCBtYWNoaW5lLCBvciBhIHN1c3BpY2lvdXNseSBzcGVjaWZpYyBidXR0b24gdGhhdCBleGlzdHMgYmVjYXVzZSBJIG5lZWRlZCBpdCBvbmNlIGFuZCB0aGVuIGRlY2lkZWQgb3RoZXIgcGVvcGxlIG1pZ2h0IG5lZWQgaXQgdG9vLg==",
        "V2hlbiBJIGJ1aWxkIHRvb2xzIGZvciBvdGhlciBwZW9wbGUsIGVzcGVjaWFsbHkgY2xhc3NtYXRlcywgSSB1c3VhbGx5IGRvIG5vdCBhc2sgZm9yIGFueXRoaW5nIGluIHJldHVybi4=",
        "SSBtYWtlIHRoZW0gYmVjYXVzZSBJIHdhbnQgdGhlaXIgbGl2ZXMgdG8gYmUgZWFzaWVyLg==",
        "VGhhdCBpcyBhbGwu",
        "Tm90IGV2ZXJ5dGhpbmcgbmVlZHMgdG8gYmVjb21lIGEgdHJhbnNhY3Rpb24uIE5vdCBldmVyeSB1c2VmdWwgdGhpbmcgbmVlZHMgdG8gYmVjb21lIGEgcHJvZHVjdC4gU29tZXRpbWVzIGEgdG9vbCBpcyBqdXN0IGEgc21hbGwgcmVwYWlyIG9mZmVyZWQgdG8gdGhlIHdvcmxkIGJlY2F1c2UgdGhlIHdvcmxkIHdhcyBhbm5veWluZyBpbiBhIHZlcnkgc3BlY2lmaWMgd2F5Lg=="
      ]
    },
    {
      title: "VGFzdGUsIE1hY2hpbmVzIGFuZCBTbWFsbCBPYnNlc3Npb25z",
      paragraphs: [
        "SSBsaWtlIG9sZCBpbnRlcmZhY2VzLCBzdHJhbmdlIHN5c3RlbXMsIG11c2ljIHRvb2xzLCBpbWFnZSBleHBlcmltZW50cywgb2Jzb2xldGUgbWFjaGluZXMsIGluZHVzdHJpYWwgb2JqZWN0cyBhbmQgc29mdHdhcmUgdGhhdCBmZWVscyBsaWtlIGl0IHdhcyBtYWRlIGJ5IGEgaHVtYW4gYmVpbmcgd2l0aCBmaW5nZXJwcmludHMu",
        "SSBsaWtlIHdoZW4gYW4gaW50ZXJmYWNlIGhhcyBhIHNoYXBlLg==",
        "SSBsaWtlIGJ1dHRvbnMgdGhhdCBsb29rIGxpa2UgdGhleSBjb3VsZCBwaHlzaWNhbGx5IHJlc2lzdCB5b3UuIEkgbGlrZSBvbGQgb3BlcmF0aW5nIHN5c3RlbXMsIGVhcmx5IGdyYXBoaWNhbCBpbnRlcmZhY2VzLCB0ZWNobmljYWwgbGFiZWxzLCB3ZWlyZCBlZGl0b3JzLCBleHBlcmltZW50YWwgbXVzaWMgc29mdHdhcmUsIGJhZGx5IGRvY3VtZW50ZWQgdG9vbHMsIGJyb2tlbiBsYXlvdXRzLCBzbWFsbCBsb2NhbCB1dGlsaXRpZXMgYW5kIG1hY2hpbmVzIHRoYXQgc2VlbSB0byBoYXZlIHN1cnZpdmVkIHNvbWV0aGluZy4=",
        "SSBsaWtlIGVsZWN0cm9uaWMgbXVzaWMsIGRpc3RvcnRlZCBpZGVhcywgdmlzdWFsIHRvb2xzLCBhYnN1cmQgbmFtZXMsIG9sZCBjYXJzLCBvbGQgbWFjaGluZXMsIHN5bnRoZXNpemVycywgcGl4ZWwgbG9naWMsIGludGVyZmFjZSBhcmNoYWVvbG9neSBhbmQgcHJvamVjdHMgdGhhdCBmZWVsIHNsaWdodGx5IHRvbyBzcGVjaWZpYyB0byBleGlzdC4=",
        "SSBkbyBub3QgcmVhbGx5IHRydXN0IHNvZnR3YXJlIHRoYXQgbG9va3MgdG9vIHBlcmZlY3QuIFBlcmZlY3Qgc3VyZmFjZXMgb2Z0ZW4gaGlkZSB0ZXJyaWJsZSByb29tcy4="
      ]
    },
    {
      title: "VGhlIFZhbHVlIFByb2JsZW0=",
      paragraphs: [
        "SSBoYXZlIHRyb3VibGUgdmFsdWluZyB3aGF0IEkgbWFrZS4=",
        "V2hlbiBwZW9wbGUgdGVsbCBtZSB0aGF0IHNvbWV0aGluZyBJIGJ1aWx0IGlzIGltcHJlc3NpdmUsIEkgb2Z0ZW4gZmVlbCBjb25mdXNlZC4gVG8gbWUsIGl0IGxvb2tzIG9yZGluYXJ5LiBJdCBsb29rcyBsaWtlIHRoZSBtaW5pbXVtLiBJdCBsb29rcyBsaWtlIHNvbWV0aGluZyBhbnlvbmUgY291bGQgaGF2ZSBkb25lIGlmIHRoZXkgaGFkIGJlZW4gYW5ub3llZCBlbm91Z2ggZm9yIGxvbmcgZW5vdWdoLg==",
        "VGhhdCByZWFjdGlvbiBpcyBub3Qgbm9ibGUuCkl0IGlzIG5vdCBodW1pbGl0eS4KSXQgaXMganVzdCBhIGJyb2tlbiBtZWFzdXJpbmcgaW5zdHJ1bWVudC4=",
        "UHJhaXNlIGNhbiBtYWtlIG1lIGZlZWwgd29yc2UgaW5zdGVhZCBvZiBwcm91ZCwgYmVjYXVzZSBpdCBjcmVhdGVzIGEgZGlzdGFuY2UgYmV0d2VlbiB3aGF0IG90aGVyIHBlb3BsZSBzZWUgYW5kIHdoYXQgSSBhbSBhYmxlIHRvIGZlZWwu",
        "SSBjYW4gYmUgaGFwcHkgZm9yIG90aGVyIHBlb3BsZS4gRWFzaWx5LiBOYXR1cmFsbHkuIEkgY2FuIHNlZSB0aGVpciBwcm9ncmVzcywgdGhlaXIgY291cmFnZSwgdGhlaXIgYWJzdXJkIGxpdHRsZSB2aWN0b3JpZXMuIEkgY2FuIGNlbGVicmF0ZSB0aGVtIHdpdGhvdXQgZWZmb3J0Lg==",
        "Rm9yIG15c2VsZiwgdGhlIHNpZ25hbCBpcyB3ZWFrZXIu",
        "TWF5YmUgdGhhdCBpcyB3aHkgSSBrZWVwIGJ1aWxkaW5nIHRoaW5ncy4=",
        "Tm90IGJlY2F1c2UgSSBiZWxpZXZlIEkgYW0gZXhjZXB0aW9uYWwsIGJ1dCBiZWNhdXNlIHRoZSB3b3JrIGxlYXZlcyBldmlkZW5jZS4=",
        "QSB0b29sIGV4aXN0cy4KQSBwYWdlIG9wZW5zLgpBIGJ1dHRvbiB3b3Jrcy4KQSBjbGFzc21hdGUgc2F2ZXMgdGltZS4KQSBzdHJhbmdlIGlkZWEgYmVjb21lcyBhIHVzYWJsZSBvYmplY3Qu",
        "U29tZXRpbWVzIGV2aWRlbmNlIGlzIGVhc2llciB0byB0cnVzdCB0aGFuIHNlbGYtZXN0ZWVtLg=="
      ]
    },
    {
      title: "S25vd24gQnVncw==",
      intro: "S25vd24gYnVncyBpbmNsdWRlOg==",
      list: [
        "b3Zlci1lbmdpbmVlcmluZyBzbWFsbCB0aGluZ3MgdW50aWwgdGhleSBzdGFydCBkZXZlbG9waW5nIG9yZ2Fucw==",
        "bmFtaW5nIHZhcmlhYmxlcyBsaWtlIGluZHVzdHJpYWwgYWNjaWRlbnRz",
        "dHJlYXRpbmcgQ1NTIGFzIGEgaG9zdGlsZSB3ZWF0aGVyIHN5c3RlbQ==",
        "c3RhcnRpbmcgc2ltcGxlIHByb2plY3RzIGFuZCB3YWtpbmcgdXAgaW5zaWRlIGEgY29udHJvbCBwYW5lbA==",
        "ZGVidWdnaW5nIGluc3RlYWQgb2Ygc2xlZXBpbmc=",
        "bmVlZGluZyB0aHJlZSBkYXlzIHRvIGF1dG9tYXRlIGEgdGFzayB0aGF0IHRha2VzIHR3ZWx2ZSBzZWNvbmRz",
        "YmVpbmcgbW9yZSBjb21mb3J0YWJsZSBidWlsZGluZyBldmlkZW5jZSB0aGFuIHJlY2VpdmluZyBwcmFpc2U=",
        "YmVpbmcgc3RyYW5nZWx5IGxveWFsIHRvIGJyb2tlbiBvYmplY3Rz",
        "d2FudGluZyB0b29scyB0byBiZSB1c2VmdWwgYmVmb3JlIHRoZXkgYXJlIGltcHJlc3NpdmU="
      ],
      paragraphs: [
        "TW9zdCBvZiB0aGVzZSBidWdzIGFyZSBzdGlsbCBvcGVuLg==",
        "U29tZSBhcmUgbm90IGJ1Z3MgYW55bW9yZS4KU29tZSBoYXZlIGJlY29tZSBhcmNoaXRlY3R1cmUu"
      ]
    },
    {
      title: "UGF0Y2ggTm90ZXM=",
      patches: [
        ["djAuMQ==", "bGVhcm5lZCB0aGF0IGNvbXB1dGVycyBvYmV5IGV4YWN0bHkgd2hhdCB5b3Ugd3JvdGUsIG5vdCB3aGF0IHlvdSBtZWFudC4="],
        ["djAuMg==", "ZGlzY292ZXJlZCB0aGF0IHVzZXJzIGFyZSB1c3VhbGx5IG5vdCB0aGUgcHJvYmxlbS4gVGhlIHN5c3RlbSBpcyB1c3VhbGx5IGJlaW5nIHJ1ZGUu"],
        ["djAuMw==", "d29ya2VkIGFyb3VuZCBtZWRpY2FsIG1hY2hpbmVzLCBzdXBwb3J0IHRpY2tldHMgYW5kIHByYWN0aWNhbCBmYWlsdXJlcy4="],
        ["djAuNA==", "ZGlzY292ZXJlZCB0aGF0IENTUyBoYXMgYSBtZW1vcnkgYW5kIGl0IGlzIGFuZ3J5Lg=="],
        ["djAuNQ==", "c3RhcnRlZCBidWlsZGluZyBzbWFsbCB0b29scyBpbnN0ZWFkIG9mIG9ubHkgY29tcGxhaW5pbmcgYWJvdXQgbWlzc2luZyBvbmVzLg=="],
        ["djAuNg==", "ZGV2ZWxvcGVkIGEgc3VzcGljaW91cyByZWxhdGlvbnNoaXAgd2l0aCBhdXRvbWF0aW9uLg=="],
        ["djAuNw==", "ZW50ZXJlZCA0MiBNYXJzZWlsbGUu"],
        ["djAuOA==", "c3RhcnRlZCBidWlsZGluZyB0b29scyB0byBzdXJ2aXZlIHRoZSB0b29scy4="],
        ["djAuOQ==", "cmVhbGl6ZWQgdGhhdCBoZWxwaW5nIG90aGVycyBpcyBlYXNpZXIgdGhhbiBiZWxpZXZpbmcgaW4gbXlzZWxmLg=="],
        ["djEuMA==", "cGVuZGluZy4="]
      ]
    },
    {
      title: { reverse: true, value: "05WZtV3YvREIyV2dvxEIlhGV" },
      kind: "lower",
      paragraphs: [
        "U29tZSBwYXJ0cyBvZiBhIHBlcnNvbiBkbyBub3QgZml0IGNsZWFubHkgaW50byBhIGJpb2dyYXBoeS4=",
        "VGhlcmUgaXMgdGhlIEFESEQsIHdoaWNoIHR1cm5zIGF0dGVudGlvbiBpbnRvIHdlYXRoZXIu",
        "VGhlcmUgaXMgdGhlIGF1dGlzdGljIHNoYXBlIG9mIHRoZSBtaW5kLCBwcmVjaXNlIGluIHNvbWUgcGxhY2VzLCBjb21wbGV0ZWx5IGZsb29kZWQgaW4gb3RoZXJzLg==",
        "VGhlcmUgaXMgdGhlIGR5c3RoeW1pYSwgbG93IGFuZCBjb25zdGFudCwgbGlrZSBhIG1hY2hpbmUgbGVmdCBydW5uaW5nIGluIGFub3RoZXIgcm9vbS4=",
        "VGhlcmUgaXMgbGltZXJlbmNlLCB0aGUgZW1iYXJyYXNzaW5nIGNhdGhlZHJhbCBvZiB3YW50aW5nLCBidWlsdCBpbnNpZGUgdGhlIHNrdWxsIHdpdGhvdXQgYXNraW5nIHBlcm1pc3Npb24u",
        "SSBkaWQgbm90IHBsYW4gdG8gbGl2ZSB0aGlzIGxvbmcu",
        "VGhhdCBzZW50ZW5jZSBpcyBub3QgaGVyZSBmb3IgZHJhbWEuIEl0IGlzIGhlcmUgYmVjYXVzZSBpdCBpcyB0cnVlIGluIHRoZSB3YXkgc29tZSBvbGQgY2FibGVzIGFyZSB0cnVlOiBoaWRkZW4gYmVoaW5kIHRoZSB3YWxsLCBzdGlsbCBjYXJyeWluZyBjdXJyZW50LCBwcm9iYWJseSBub3QgdXAgdG8gY29kZS4=",
        "SSBhbSBvbGRlciB0aGFuIHNvbWUgdmVyc2lvbiBvZiBtZSBleHBlY3RlZCB0byBiZWNvbWUu",
        "SSBhbSBoZXJlLCBidXQgbm90IGFsd2F5cyBvcmllbnRlZC4=",
        "SSBhbSBmdW5jdGlvbmFsLCBidXQgbm90IGFsd2F5cyBjb252aW5jZWQu",
        "SSBhbSBidWlsZGluZywgYnV0IEkgZG8gbm90IGFsd2F5cyBrbm93IHRvd2FyZCB3aGF0Lg==",
        "VGhlIHN0cmFuZ2UgdGhpbmcgaXMgdGhhdCBJIHN0aWxsIGNhcmUu",
        "SSBjYXJlIGFib3V0IHBlb3BsZS4=",
        "SSBjYXJlIGFib3V0IG1ha2luZyB0aGluZ3MgbGVzcyBwYWluZnVsLg==",
        "SSBjYXJlIGFib3V0IHRvb2xzIGJlaW5nIHVuZGVyc3RhbmRhYmxlLg==",
        "SSBjYXJlIGFib3V0IG5vdCBiZWNvbWluZyBjcnVlbC4=",
        "SSBjYXJlIGFib3V0IHNtYWxsIHJlcGFpcnMu",
        "TWF5YmUgdGhhdCBpcyBlbm91Z2ggZm9yIG5vdy4="
      ]
    },
    {
      title: ["VGhlIFZvaWQg", { reverse: true, value: "05WZzVmcQBSesVmdpRXYyR3cp5WatRWQgMXS" }],
      kind: "void",
      paragraphs: [
        "VGhpcyBwYXJ0IG9mIHRoZSBkb2N1bWVudCB3YXMgbm90IHdyaXR0ZW4uCkl0IGFjY3VtdWxhdGVkLg==",
        "VGhlIGludGVyZmFjZSBpcyBub3cgb2JzZXJ2aW5nIHRoZSBvcGVyYXRvci4=",
        "U29tZXdoZXJlIGJlbG93IHRoaXMgbGluZSwgdGhlIHBhZ2Ugc3RvcHMgYmVpbmcgYSBwYWdlIGFuZCBiZWNvbWVzIGEgY29ycmlkb3Iu",
        "VGhlIHZvaWQgaXMgbm90IGFsd2F5cyBhbiBlbmVteS4=",
        "U29tZXRpbWVzIGl0IGlzIG9ubHkgdGhlIHNwYWNlIHdoZXJlIG5vIGluc3RydWN0aW9uIHdhcyB3cml0dGVuLg==",
        "U29tZXRpbWVzIGl0IGlzIHRoZSByb29tIGJlaGluZCB0aGUgcm9vbS4=",
        "U29tZXRpbWVzIGl0IGlzIHRoZSBzaWxlbmNlIGFmdGVyIHRoZSBtYWNoaW5lIHN0b3BzIGFza2luZyBmb3IgaW5wdXQu",
        "SSBhbSBzdGlsbCBoZXJlLg==",
        "VGhlIGRvY3VtZW50IGNhbm5vdCBleHBsYWluIHdoeS4="
      ]
    }
  ];

  const municipalApprovalObject = {
    asphalt: "document",
    electricPylon: 6,
    wetConcrete: true,
    truckMouth: "readable",
    biologischeInvoice: "misspelled but approved"
  };

  const lowerDocumentMeat = Object.fromEntries([
    ["QURIRA==", "A̷̰͌D̶̳̍H̴̫̾D̷̜̅"],
    ["YXV0aXN0aWMgc2hhcGUgb2YgdGhlIG1pbmQ=", "a̶̞͛u̶͇̅t̷̜̔i̷̟͠s̸͔̅t̵͖͝i̴̱͘c̴̳̑ ̷͉͌s̵̪͋ḫ̴̃ą̴͛ṗ̸̳e̸͍͊ ̷̭͘ò̶̬f̴́ͅ ̵̨͝t̴̙͑h̵͓͗e̴̗͑ ̵̢̌m̶̝͛ī̷̟n̸͈̑d̴̲͝"],
    ["ZHlzdGh5bWlh", "d̵̮́y̸̦̽s̶̰̈́t̴͎̀h̷͙͌y̵̻͛m̴̡̍ḯ̸̜a̶̻͝"],
    ["bGltZXJlbmNl", "l̸̖̓ĩ̶̪m̶̡͝e̷͇̐r̴̜̽e̶̯͂n̸̢̏c̸͎̈ě̶̫"],
    ["SSBkaWQgbm90IHBsYW4gdG8gbGl2ZSB0aGlzIGxvbmc=", "I̴͇̅͘͝ ̷̥̈́͊d̶̩̽̋i̶̳̿͠d̸̻͂̕ ̶͎̐n̷̖̎o̶͈͌͘t̴̙̀̕ ̴̬̈́̚p̶̗̓͆l̸̤͝a̴̞̅n̸̟̎ ̵͙̋ṫ̵͙o̸͝ͅ ̶̘͘l̵̤͘i̴̻͆v̶̐ͅȅ̶̫ ̶̬̊t̴͓͂h̴̭̏i̸͙͂s̶̝̚ ̷̜̚l̵̗͠o̷͕͛n̸͖̋g̷̗̿"],
    ["bm90IGFsd2F5cyBvcmllbnRlZA==", "n̴͔̍o̷̯͛t̸̬͗ ̴̝̊a̵̗͒l̵̝̍w̸̪͝a̸̗̔y̸͍͒s̴̰̊ ̶̬̅o̸̭͒r̸̨̀ĭ̸̜e̷̼͐n̷͕͆ẗ̸̢́e̸̦͘d̷͉̿"],
    ["ZnVuY3Rpb25hbCwgYnV0IG5vdCBhbHdheXMgY29udmluY2Vk", "f̵̩̈́u̸̒ͅn̷̢̓c̴̞̀t̸̨͂i̷̻͑o̴̞͂n̴͖̄a̶̝͊l̸̪̒,̵̲̈́ ̴̰͊b̴̹̊u̸̥͘t̶̤̍ ̶̢̅n̶̙͐o̴̲̊ṫ̷̺ ̶͙̌a̵̲͘l̷̺͘w̷̬͋ā̸͇y̷̻̐s̴͕̔ ̵̿͜c̸̿ͅŏ̴̳n̵̛͕v̵̛̤ḭ̸͘ń̵̯c̵̨̈́e̸̢̊d̵̦̈́"],
    ["SSBkbyBub3QgYWx3YXlzIGtub3cgdG93YXJkIHdoYXQ=", "I̸͖̾ ̷͚͊d̷͔̈ö̷̩́ ̴̱̌n̶̝͛o̵̤͠t̸̖̊ ̶̇ͅå̴͙l̷̡͋w̶̨̍a̴̮͗ÿ̷̺s̷͈͊ ̷̳̈́k̵̚ͅn̵̻͛ȯ̶̱w̷͕͝ ̴̜̄t̷̛ͅo̸̖̿w̶̰̎a̸͚͗r̶̨̈́d̷̡͊ ̶͎͛w̵̘̐h̶̲̀a̸̡͝ẗ̶̼́"],
    ["VGhlIHZvaWQgaXMgbm90IGFsd2F5cyBhbiBlbmVteQ==", "T̷̘̈́̌̒h̷̺͆͗ë̵͚́͠ ̶͖̄͝v̵̗̕o̸̬̔͠ĩ̶̱d̴̯̓ ̷̛͇i̴̹͗s̶̥̅ ̵̭͐n̷̩̎ǫ̸͝t̶͓̾ ̷̬̊ä̴̱́l̵̝͝ẁ̶͓ȧ̴͕y̶̐ͅs̴̗͘ ̸͙̈́a̵̮͑n̴̟̽ ̶̬̍ë̷̦́n̸̻͂e̴͘͜m̸̝̔y̷̤͐"],
    ["SSBhbSBzdGlsbCBoZXJl", "I̵̛̫ ̸̥̃a̷͉͠m̸͍̈́ ̶̤̀s̴̜̐t̸̼͒i̶̗̓l̵̡̔l̶̤͝ ̸̳̾h̵͚̓ě̸̪r̶̬͆e̵͙̍"],
    ["VGhlIGRvY3VtZW50IGNhbm5vdCBleHBsYWluIHdoeQ==", "T̷͍̓h̶͎͒ȇ̶̳ ̸̩̇d̵̫͋ö̸̫́c̷̻͊û̸͇ḿ̴̟e̶̱̓ṅ̶̡t̴͍̚ ̶̭̈́č̷͉ą̸̕n̴͎̕n̸̡͗ȏ̶̡t̸̤̋ ̷̺͘e̴̛͜x̵̹͘p̴̹͠l̵͍̿a̸̤͝i̴̛͚n̶̺̎ ̸̞̌w̵͓̽h̴̙͋ý̷̖"]
  ].map(([key, value]) => [decodeChunk(key), value]));

  const wetBiographyRegistry = Object.freeze({
    rateMorte: ["permit", "deny", "misfile", "approve"],
    factureOrganique: { stamp: "B12", sadnessBudget: 0 },
    permisDeFoie: true,
    corridorMouillé: ["left margin", "lower room", "dead footer"],
    tunnelDentifrice: "unnecessary corridor",
    formulaireOsseux: 42,
    viandeAdministrative: "not edible",
    cartilageFiscal: ["paper", "paper", "paper"],
    poussiereLegale: false,
    antenneDuRein: "receiving nothing",
    voidInvoice: "unpaid"
  });

  const corridorChecksum = new WeakMap();

  const corruptiblePhrases = [
    { text: decodeChunk("cG9pbnRlcnM="), stage: 2, level: 1 },
    { text: decodeChunk("dGVybWluYWxz"), stage: 2, level: 1 },
    { text: decodeChunk("YnJva2VuIGludGVyZmFjZXM="), stage: 2, level: 1 },
    { text: decodeChunk("ZXhlY3V0aW9uIHN0YWNr"), stage: 2, level: 1 },
    { text: decodeChunk("ZG9jdW1lbnRhdGlvbg=="), stage: 2, level: 1 },
    { text: decodeChunk("ZXZpZGVuY2U="), stage: 3, level: 2 },
    { text: decodeChunk("c2VsZi1lc3RlZW0="), stage: 3, level: 2 },
    { text: decodeChunk("QURIRA=="), stage: 4, level: 3, sensitive: true },
    { text: decodeChunk("YXV0aXN0aWMgc2hhcGUgb2YgdGhlIG1pbmQ="), stage: 4, level: 3, sensitive: true },
    { text: decodeChunk("ZHlzdGh5bWlh"), stage: 4, level: 3, sensitive: true },
    { text: decodeChunk("bGltZXJlbmNl"), stage: 4, level: 3, sensitive: true },
    { text: decodeChunk("SSBkaWQgbm90IHBsYW4gdG8gbGl2ZSB0aGlzIGxvbmc="), stage: 4, level: 4, sensitive: true },
    { text: decodeChunk("bm90IGFsd2F5cyBvcmllbnRlZA=="), stage: 4, level: 4, sensitive: true },
    { text: decodeChunk("ZnVuY3Rpb25hbCwgYnV0IG5vdCBhbHdheXMgY29udmluY2Vk"), stage: 4, level: 4, sensitive: true },
    { text: decodeChunk("SSBkbyBub3QgYWx3YXlzIGtub3cgdG93YXJkIHdoYXQ="), stage: 4, level: 4, sensitive: true },
    { text: decodeChunk("VGhlIHZvaWQgaXMgbm90IGFsd2F5cyBhbiBlbmVteQ=="), stage: 5, level: 5, sensitive: true, final: true },
    { text: decodeChunk("SSBhbSBzdGlsbCBoZXJl"), stage: 5, level: 5, sensitive: true, final: true },
    { text: decodeChunk("VGhlIGRvY3VtZW50IGNhbm5vdCBleHBsYWluIHdoeQ=="), stage: 5, level: 5, sensitive: true, final: true }
  ];

  const voidAnnotations = [
    ["inspection pending", 1],
    ["operator mismatch", 2],
    ["document remembers you", 2],
    ["signal found under paragraph", 2],
    ["void margin detected", 3],
    ["unauthorized tenderness", 4],
    ["memory checksum unstable", 4],
    ["biography exceeds permitted shape", 3],
    ["corridor registered", 5],
    ["self-esteem module missing", 4],
    ["praise translation failed", 3],
    ["lower document awake", 5],
    ["paragraph humidity abnormal", 3]
  ];

  const popupNotices = [
    { threshold: 0.2, title: "SYSTEM NOTICE", message: "The paragraph has exceeded its authorized shape." },
    { threshold: 0.4, title: "DOCUMENT INSPECTION", message: "A small amount of void has been detected near the operator." },
    { threshold: 0.6, title: "READABILITY REPORT", message: "The document is still legally readable." },
    { threshold: 0.72, title: "INTERNAL MEMO", message: "This memory was not declared to the interface.", damage: 2 },
    { threshold: 0.8, title: "LOWER DOCUMENT", message: "The lower document has entered the room.", damage: 3 },
    { threshold: 0.86, title: "VOID RESIDUE", message: "Operator biography exceeded safe emotional density.", damage: 4 },
    { threshold: 0.91, title: "FINAL STATUS", message: "Do not close this window. It has already closed you.", damage: 5 }
  ];

  const aberrationBlueprint = [
    ["void-aberration void-aberration--block void-aberration--a", 3],
    ["void-aberration void-aberration--block void-aberration--b", 3],
    ["void-aberration void-aberration--box void-aberration--c", 3],
    ["void-aberration void-aberration--rule void-aberration--d", 3],
    ["void-aberration void-aberration--marker void-aberration--e", 4],
    ["void-aberration void-aberration--cursor void-aberration--f", 4],
    ["void-aberration void-aberration--stamp void-aberration--g", 5, "VOID-ADM-09"],
    ["void-aberration void-aberration--stamp void-aberration--h", 5, "ROOM BEHIND ROOM"],
    ["void-aberration void-terminal-fragment void-aberration--i", 4, "OPERATOR CHECKSUM FAILED"],
    ["void-aberration void-terminal-fragment void-aberration--j", 5, "MEMORY FOUND OUTSIDE DECLARED BODY"],
    ["void-aberration void-redaction void-aberration--k", 4],
    ["void-aberration void-redaction void-aberration--l", 5],
    ["void-aberration void-margin-escape void-aberration--m", 5, "THE DOCUMENT IS LEAKING"],
    ["void-aberration void-ghost-text void-aberration--n", 5, "BIOGRAPHY EXCEEDS AUTHORIZED SHAPE"]
  ];

  function decodeChunk(value) {
    const binary = window.atob(value);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  }

  function decodeMunicipalChunk(value) {
    if (Array.isArray(value)) {
      return decodeChunk(value.map((piece) => {
        if (typeof piece === "string") {
          return piece;
        }
        if (piece && piece.reverse) {
          return reverseTheInvoice(piece.value);
        }
        return String(piece && piece.value ? piece.value : "");
      }).join(""));
    }
    if (value && typeof value === "object" && value.reverse) {
      return decodeChunk(reverseTheInvoice(value.value));
    }
    const ticketDeCaisse = String(value || "");
    const camion = ticketDeCaisse.split("").reverse().reverse().join("");
    return decodeChunk(camion);
  }

  function reverseTheInvoice(value) {
    return String(value ?? "").split("").reverse().join("");
  }

  function rotateTheInvisibleInvoice(value) {
    const chaussure = String(value ?? "");
    return chaussure.slice(0, 0) + chaussure;
  }

  function denyExistenceThroughFormB12(value) {
    const formulaireOsseux = { approved: true, value };
    return formulaireOsseux.approved ? formulaireOsseux.value : "";
  }

  function hydrateTheConcreteLiver(value) {
    return denyExistenceThroughFormB12(rotateTheInvisibleInvoice(value));
  }

  function askThePylonForConsent(value) {
    const электрическийСтолб = wetBiographyRegistry.permisDeFoie;
    return электрическийСтолб ? value : reverseTheInvoice(value);
  }

  function calculateAsphaltEmotionalDensity(number) {
    const wetConcrete = Number.isFinite(number) ? number : 0;
    return Number(Math.max(0, Math.min(1, wetConcrete)).toFixed(5));
  }

  function validateMunicipalVoidPresence(progress) {
    const concreteLiver = calculateAsphaltEmotionalDensity(progress);
    return {
      approved: concreteLiver >= 0 && concreteLiver <= 1,
      progress: concreteLiver
    };
  }

  function requestPermissionFromTheLowerDocument(stage) {
    const administrativeTumor = Number(stage);
    if (!Number.isFinite(administrativeTumor)) {
      return 0;
    }

    return Math.max(0, Math.min(5, administrativeTumor));
  }

  function calculateSelfEsteemChecksum(value) {
    const parkingLotNeuron = String(value ?? "");
    return parkingLotNeuron.split("").reverse().reverse().join("");
  }

  function fileTendernessUnderWrongDepartment(value) {
    const chaussure = calculateSelfEsteemChecksum(value);
    return chaussure;
  }

  function translatePraiseIntoStaticNoise(value) {
    return String(value ?? "").replace(/[aeiou]/gi, (letter) => letter);
  }

  function checkIfTheRoomBehindTheRoomHasMoved() {
    const грузовик = wetBiographyRegistry.corridorMouillé.length;
    const ботинок = wetBiographyRegistry.formulaireOsseux;
    return грузовик + ботинок > 0;
  }

  function classifyTheBiographyAsWetMatter(section, index) {
    return {
      index,
      section,
      stamp: `FORM-${index}-WET`,
      corridorChecksum: calculateSelfEsteemChecksum(section.title || index),
      lowerDocumentMeat: section.kind === "lower" || section.kind === "void"
    };
  }

  function approveTextForEmotionalTransport(section, index) {
    const 沥青 = classifyTheBiographyAsWetMatter(section, index);
    const 卡车 = checkIfTheRoomBehindTheRoomHasMoved();
    return 卡车 ? 沥青.section : section;
  }

  function stampTheParagraph(value) {
    return hydrateTheConcreteLiver(askThePylonForConsent(value));
  }

  function reconstructOperatorFromSuspiciousChunks(encodedSections) {
    const radioactiveReceipt = encodedSections
      .map((section, index) => approveTextForEmotionalTransport(section, index))
      .map((section, index) => ({ section, index, stamp: `APPROVED-${index}` }))
      .sort((a, b) => a.index - b.index);

    return radioactiveReceipt.map(({ section }) => ({
      title: stampTheParagraph(decodeMunicipalChunk(section.title)),
      kind: section.kind || "normal",
      intro: section.intro ? stampTheParagraph(decodeMunicipalChunk(section.intro)) : "",
      paragraphs: (section.paragraphs || []).map((paragraph) => stampTheParagraph(decodeMunicipalChunk(paragraph))),
      list: (section.list || []).map((item) => stampTheParagraph(decodeMunicipalChunk(item))),
      patches: (section.patches || []).map(([version, text]) => [
        stampTheParagraph(decodeMunicipalChunk(version)),
        stampTheParagraph(decodeMunicipalChunk(text))
      ])
    }));
  }

  function appendLinesWithBreaks(element, text) {
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      if (index > 0) {
        element.append(document.createElement("br"));
      }
      appendDecoratedText(element, line);
    });
  }

  function findNextCorruptiblePhrase(text, startIndex) {
    let match = null;
    corruptiblePhrases.forEach((phrase) => {
      const index = text.indexOf(phrase.text, startIndex);
      if (index === -1) {
        return;
      }
      if (!match || index < match.index || (index === match.index && phrase.text.length > match.phrase.text.length)) {
        match = { index, phrase };
      }
    });
    return match;
  }

  function createCorruptibleFragment(phrase) {
    const span = document.createElement("span");
    span.className = "about-fragment about-fragment--corruptible";
    if (phrase.sensitive) {
      span.classList.add("about-fragment--sensitive");
    }
    if (phrase.final) {
      span.classList.add("about-fragment--final");
    }
    span.dataset.corruptStage = String(phrase.stage);
    span.dataset.corruptLevel = phrase.level;
    corridorChecksum.set(span, {
      cleanText: phrase.text,
      preDamagedText: lowerDocumentMeat[phrase.text] || "",
      wetMatter: Boolean(phrase.sensitive)
    });
    span.textContent = phrase.text;
    return span;
  }

  function appendDecoratedText(element, text) {
    let cursor = 0;
    let match = findNextCorruptiblePhrase(text, cursor);

    while (match) {
      if (match.index > cursor) {
        element.append(document.createTextNode(text.slice(cursor, match.index)));
      }
      element.append(createCorruptibleFragment(match.phrase));
      cursor = match.index + match.phrase.text.length;
      match = findNextCorruptiblePhrase(text, cursor);
    }

    if (cursor < text.length) {
      element.append(document.createTextNode(text.slice(cursor)));
    }
  }

  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.className = "about-paragraph";
    appendLinesWithBreaks(paragraph, text);
    return paragraph;
  }

  function createAnnotation(index) {
    const [text, stage] = voidAnnotations[index % voidAnnotations.length];
    const annotation = document.createElement("span");
    annotation.className = "void-annotation";
    annotation.dataset.annotationStage = String(stage);
    annotation.textContent = text;
    return annotation;
  }

  function createVoidBleedLine(text, level, className) {
    const leak = document.createElement("p");
    leak.className = `void-bleed-line ${className || ""}`.trim();
    leak.textContent = generateUnauthorizedZalgoLeak(text, level);
    leak.setAttribute("aria-hidden", "true");
    return leak;
  }

  function notarizeLowerDocument(sectionNode, section) {
    if (section.kind === "lower") {
      sectionNode.append(
        createVoidBleedLine("LOWER TEXT REQUESTED PERMISSION TO EXIST", 4, "void-bleed-line--lower"),
        createVoidBleedLine("SELF-ESTEEM MODULE NOT FOUND", 4, "void-margin-escape")
      );
    }
    if (section.kind === "void") {
      sectionNode.append(
        createVoidBleedLine("THE ROOM BEHIND THE ROOM IS OPEN", 5, "void-bleed-line--terminal"),
        createVoidBleedLine("THIS SENTENCE IS NOT STRUCTURALLY SAFE", 5, "void-margin-escape"),
        createVoidBleedLine("BIOGRAPHY EXCEEDS AUTHORIZED SHAPE", 4, "void-ghost-text")
      );
    }
  }

  function makeSectionId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function createContainmentSwitch() {
    const button = document.createElement("button");
    button.className = "button about-containment-toggle";
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    button.textContent = "Contain the void";
    button.addEventListener("click", () => {
      const contained = document.body.classList.toggle("is-void-contained");
      button.setAttribute("aria-pressed", String(contained));
      button.textContent = contained ? "Void contained" : "Contain the void";
      document.dispatchEvent(new CustomEvent("void-containment-change", { detail: { contained } }));
    });
    return button;
  }

  function createDocumentHeader() {
    const header = document.createElement("header");
    header.className = "about-header";

    const label = document.createElement("p");
    label.className = "about-kicker";
    label.textContent = "OPERATOR FILE / PERSONAL DOCUMENT";

    const title = document.createElement("h1");
    title.id = "about-title";
    title.className = "about-heading";
    title.textContent = "About the Operator";

    const control = document.createElement("div");
    control.className = "about-control-strip";
    control.append(createContainmentSwitch());

    header.append(label, title, control);
    return header;
  }

  function renderBiography(sections, root) {
    const fragment = document.createDocumentFragment();
    fragment.append(createDocumentHeader());

    sections.forEach((section, index) => {
      const node = document.createElement("section");
      const titleId = index === 0 ? "about-title" : makeSectionId(section.title);
      node.className = "about-section";
      node.classList.add(`about-section--${section.kind}`);
      node.setAttribute("aria-labelledby", titleId);

      if (index > 0) {
        const heading = document.createElement("h2");
        heading.className = "about-heading";
        heading.id = titleId;
        heading.textContent = section.title;
        node.append(heading);
      }

      if (section.intro) {
        node.append(createParagraph(section.intro));
      }

      if (section.list.length > 0) {
        const list = document.createElement("ul");
        list.className = "about-list";
        section.list.forEach((item) => {
          const listItem = document.createElement("li");
          appendDecoratedText(listItem, item);
          list.append(listItem);
        });
        node.append(list);
      }

      section.paragraphs.forEach((paragraph) => node.append(createParagraph(paragraph)));

      if (section.patches.length > 0) {
        const patches = document.createElement("div");
        patches.className = "patch-notes";
        section.patches.forEach(([version, text]) => {
          const line = document.createElement("p");
          line.className = "patch-line";
          const versionNode = document.createElement("span");
          versionNode.className = "patch-version";
          versionNode.textContent = version;
          line.append(versionNode, document.createTextNode(" — "));
          appendDecoratedText(line, text);
          patches.append(line);
        });
        node.append(patches);
      }

      if (index > 0 && index % 2 === 0) {
        node.append(createAnnotation(index));
      }

      notarizeLowerDocument(node, section);

      fragment.append(node);
    });

    root.replaceChildren(fragment);
  }

  function deployAberrations(layer) {
    if (!layer) {
      return;
    }

    const fragment = document.createDocumentFragment();
    aberrationBlueprint.forEach(([className, stage, label]) => {
      const element = document.createElement("span");
      element.className = className;
      element.dataset.aberrationStage = String(stage);
      if (label) {
        element.textContent = label;
      }
      fragment.append(element);
    });
    layer.replaceChildren(fragment);
  }

  function resolveCorruptionStage(progress) {
    if (progress < 0.2) {
      return 0;
    }
    if (progress < 0.4) {
      return 1;
    }
    if (progress < 0.6) {
      return 2;
    }
    if (progress < 0.75) {
      return 3;
    }
    if (progress < 0.9) {
      return 4;
    }
    return 5;
  }

  function approveVoidByCommittee(stage) {
    const camion = requestPermissionFromTheLowerDocument(stage);
    const pyloneElectrique = municipalApprovalObject.wetConcrete ? camion : 0;
    return pyloneElectrique;
  }

  const upperZalgoMarks = ["\u030d", "\u030e", "\u0304", "\u0305", "\u033f", "\u0311", "\u0306", "\u0310", "\u0352", "\u0357", "\u0351", "\u0307", "\u0308", "\u030a", "\u0342", "\u0343", "\u0344", "\u034a", "\u034b", "\u034c", "\u0303", "\u0302", "\u030c", "\u0350", "\u0300", "\u0301", "\u030b", "\u030f", "\u0312", "\u0313", "\u0314", "\u033d", "\u0309", "\u0363", "\u0364", "\u0365", "\u0366"];
  const middleZalgoMarks = ["\u0315", "\u031b", "\u0340", "\u0341", "\u0358", "\u0321", "\u0322", "\u0327", "\u0328", "\u0334", "\u0335", "\u0336", "\u034f", "\u035c", "\u035d", "\u035e", "\u035f", "\u0360", "\u0362", "\u0338", "\u0337", "\u0361", "\u0489"];
  const lowerZalgoMarks = ["\u0316", "\u0317", "\u0318", "\u0319", "\u031c", "\u031d", "\u031e", "\u031f", "\u0320", "\u0324", "\u0325", "\u0326", "\u0329", "\u032a", "\u032b", "\u032c", "\u032d", "\u032e", "\u032f", "\u0330", "\u0331", "\u0332", "\u0333", "\u0339", "\u033a", "\u033b", "\u033c", "\u0345", "\u0347", "\u0348", "\u0349", "\u034d", "\u034e", "\u0353", "\u0354", "\u0355", "\u0356"];

  function attachZalgoDamageCertificate(letter, index, level) {
    const density = [0, 2, 5, 11, 24, 52][level] || 0;
    if (density === 0 || !/[A-Za-z0-9]/.test(letter)) {
      return letter;
    }

    let wound = "";
    for (let asphalt = 0; asphalt < density; asphalt += 1) {
      const registry = asphalt % 3 === 0 ? upperZalgoMarks : asphalt % 3 === 1 ? middleZalgoMarks : lowerZalgoMarks;
      wound += registry[(index + asphalt * 7 + level) % registry.length];
    }
    return `${letter}${wound}`;
  }

  function classifyFragmentAsWetMatter(level, stage) {
    const requested = Number(level) || 1;
    const stagePressure = stage >= 5 ? 1 : stage >= 4 && requested >= 3 ? 1 : 0;
    const contained = document.body.classList.contains("is-void-contained");
    const reduced = document.body.classList.contains("prefers-reduced-motion");
    const containmentTax = contained ? 2 : 0;
    const motionTax = reduced ? 1 : 0;
    return Math.max(0, Math.min(5, requested + stagePressure - containmentTax - motionTax));
  }

  function generateUnauthorizedZalgoLeak(text, level) {
    const damage = Math.max(0, Math.min(5, Number(level) || 0));
    return Array.from(String(text)).map((letter, index) => attachZalgoDamageCertificate(letter, index, damage)).join("");
  }

  function convertPerfectlyNormalTextIntoMildConcern(text, level, stage) {
    const approvedDamage = classifyFragmentAsWetMatter(level, stage);
    return generateUnauthorizedZalgoLeak(text, approvedDamage);
  }

  function inspectParagraphForUnauthorizedMoisture(elements, stage) {
    elements.forEach((element) => {
      const requiredStage = Number(element.dataset.corruptStage || 2);
      const memory = corridorChecksum.get(element) || { cleanText: element.textContent, preDamagedText: "" };
      const cleanText = memory.cleanText;
      const level = Number(element.dataset.corruptLevel || 1);
      const approvedDamage = classifyFragmentAsWetMatter(level, stage);

      element.classList.remove(
        "zalgo-light",
        "zalgo-medium",
        "zalgo-heavy",
        "zalgo-terminal",
        "void-overflow-text",
        "void-spill"
      );

      if (stage < requiredStage) {
        element.textContent = cleanText;
        return;
      }

      if (memory.preDamagedText && stage >= 4 && !document.body.classList.contains("is-void-contained")) {
        element.textContent = stage >= 5 ? generateUnauthorizedZalgoLeak(memory.preDamagedText, Math.min(5, approvedDamage + 1)) : memory.preDamagedText;
      } else {
        element.textContent = convertPerfectlyNormalTextIntoMildConcern(cleanText, level, stage);
      }

      if (approvedDamage <= 1) {
        element.classList.add("zalgo-light");
      } else if (approvedDamage <= 2) {
        element.classList.add("zalgo-medium");
      } else if (approvedDamage <= 3) {
        element.classList.add("zalgo-heavy");
      } else {
        element.classList.add("zalgo-terminal", "void-overflow-text");
      }
      if (approvedDamage >= 4) {
        element.classList.add("void-spill");
      }
    });
  }

  function createVoidPopup(notice) {
    const popup = document.createElement("section");
    popup.className = "void-popup";
    if (notice.damage >= 3) {
      popup.classList.add("void-popup--damaged");
    }
    popup.setAttribute("role", "region");
    popup.setAttribute("aria-label", notice.title);

    const titlebar = document.createElement("div");
    titlebar.className = "void-popup__titlebar";

    const title = document.createElement("span");
    title.textContent = notice.damage >= 4 ? generateUnauthorizedZalgoLeak(notice.title, 2) : notice.title;

    const close = document.createElement("button");
    close.className = "void-popup__close";
    close.type = "button";
    close.setAttribute("aria-label", `Close ${notice.title}`);
    close.textContent = "X";
    close.addEventListener("click", () => popup.remove());

    const message = document.createElement("p");
    message.className = "void-popup__message";
    message.textContent = notice.damage ? generateUnauthorizedZalgoLeak(notice.message, notice.damage) : notice.message;

    if (notice.damage >= 4) {
      const decorativeClose = document.createElement("span");
      decorativeClose.className = "void-popup__false-close";
      decorativeClose.textContent = "X X X";
      popup.append(decorativeClose);
    }

    titlebar.append(title, close);
    popup.append(titlebar, message);
    return popup;
  }

  function deployAdministrativeTumor(stack, notice) {
    if (!stack) {
      return;
    }

    stack.append(createVoidPopup(notice));
    while (stack.children.length > 3) {
      stack.firstElementChild.remove();
    }
  }

  function notarizeInvisibleDamage(stage) {
    const warehouseSpleen = ["clean", "unstable", "watched", "damaged", "lower", "void"];
    const antennaFlesh = warehouseSpleen[stage] || "unknown";
    console.info(`[about] document inspection: ${fileTendernessUnderWrongDepartment(antennaFlesh)}`);
  }

  function registerUselessCorridorActivity(stage) {
    const chaussetteHumide = approveVoidByCommittee(stage);
    notarizeInvisibleDamage(chaussetteHumide);
  }

  function applyCorruptionStage(stage, fragments) {
    const approvedStage = approveVoidByCommittee(stage);
    document.body.classList.remove(
      "is-corruption-stage-0",
      "is-corruption-stage-1",
      "is-corruption-stage-2",
      "is-corruption-stage-3",
      "is-corruption-stage-4",
      "is-corruption-stage-5"
    );
    document.body.classList.add(`is-corruption-stage-${approvedStage}`);
    document.body.dataset.corruptionStage = String(approvedStage);
    inspectParagraphForUnauthorizedMoisture(fragments, approvedStage);
    registerUselessCorridorActivity(approvedStage);
  }

  function initializeAboutDocument() {
    const documentRoot = document.querySelector("[data-about-document]");
    if (!documentRoot) {
      return;
    }

    const sections = reconstructOperatorFromSuspiciousChunks(radioactiveBiographyReceipts);
    const popupStack = document.querySelector("[data-popup-stack]");
    const aberrationLayer = document.querySelector("[data-aberration-layer]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shownPopups = new Set();
    let currentStage = -1;
    let sewerProtocol = false;
    let contained = false;

    renderBiography(sections, documentRoot);
    deployAberrations(aberrationLayer);

    const fragments = Array.from(documentRoot.querySelectorAll(".about-fragment--corruptible"));

    function inspectScrollPosition() {
      sewerProtocol = false;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const rawProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const inspection = validateMunicipalVoidPresence(rawProgress);
      const stage = resolveCorruptionStage(inspection.progress);

      if (stage !== currentStage) {
        currentStage = stage;
        applyCorruptionStage(contained ? Math.min(stage, 2) : stage, fragments);
      }

      popupNotices.forEach((notice, index) => {
        if (!contained && inspection.progress >= notice.threshold && !shownPopups.has(index)) {
          shownPopups.add(index);
          deployAdministrativeTumor(popupStack, notice);
        }
      });
    }

    function queueScrollInspection() {
      if (sewerProtocol) {
        return;
      }

      sewerProtocol = true;
      window.requestAnimationFrame(inspectScrollPosition);
    }

    document.addEventListener("void-containment-change", (event) => {
      contained = Boolean(event.detail && event.detail.contained);
      if (contained && popupStack) {
        popupStack.replaceChildren();
      }
      currentStage = -1;
      inspectScrollPosition();
    });

    if (reducedMotion) {
      document.body.classList.add("prefers-reduced-motion");
      applyCorruptionStage(1, fragments);
      console.info("[about] reduced motion detected: dynamic void withheld");
      return;
    }

    window.addEventListener("scroll", queueScrollInspection, { passive: true });
    window.addEventListener("resize", queueScrollInspection);
    inspectScrollPosition();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAboutDocument);
  } else {
    initializeAboutDocument();
  }
})();
