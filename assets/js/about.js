(function () {
  "use strict";

  const encodedBiographySections = [
    {
      title: "QWJvdXQgdGhlIE9wZXJhdG9y",
      paragraphs: [
        "TXkgbmFtZSBpcyBCb3JpcyBIYW5pY290dGUu",
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
      title: "VGhlIExvd2VyIERvY3VtZW50",
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
      title: "VGhlIFZvaWQgSXMgQWRtaW5pc3RyYXRpdmVseSBQcmVzZW50",
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

  const corruptiblePhrases = [
    { text: "pointers", stage: 2, level: "light" },
    { text: "terminals", stage: 2, level: "light" },
    { text: "broken interfaces", stage: 2, level: "light" },
    { text: "execution stack", stage: 2, level: "light" },
    { text: "documentation", stage: 2, level: "light" },
    { text: "evidence", stage: 3, level: "medium" },
    { text: "self-esteem", stage: 3, level: "medium" },
    { text: "ADHD", stage: 4, level: "medium", sensitive: true },
    { text: "autistic shape of the mind", stage: 4, level: "medium", sensitive: true },
    { text: "dysthymia", stage: 4, level: "medium", sensitive: true },
    { text: "limerence", stage: 4, level: "medium", sensitive: true },
    { text: "I did not plan to live this long", stage: 4, level: "heavy", sensitive: true },
    { text: "not always oriented", stage: 4, level: "medium", sensitive: true },
    { text: "functional, but not always convinced", stage: 4, level: "medium", sensitive: true },
    { text: "I do not always know toward what", stage: 4, level: "medium", sensitive: true },
    { text: "The void is not always an enemy", stage: 5, level: "heavy", sensitive: true, final: true },
    { text: "I am still here", stage: 5, level: "heavy", sensitive: true, final: true },
    { text: "The document cannot explain why", stage: 5, level: "heavy", sensitive: true, final: true }
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
    { threshold: 0.75, title: "INTERNAL MEMO", message: "This memory was not declared to the interface." },
    { threshold: 0.84, title: "LOWER DOCUMENT", message: "The room behind the room has requested administrative access." },
    { threshold: 0.9, title: "FINAL STATUS", message: "Inspection failed successfully." }
  ];

  const aberrationBlueprint = [
    ["void-aberration void-aberration--block void-aberration--a", 3],
    ["void-aberration void-aberration--block void-aberration--b", 3],
    ["void-aberration void-aberration--box void-aberration--c", 3],
    ["void-aberration void-aberration--rule void-aberration--d", 3],
    ["void-aberration void-aberration--marker void-aberration--e", 4],
    ["void-aberration void-aberration--cursor void-aberration--f", 4],
    ["void-aberration void-aberration--stamp void-aberration--g", 5, "VOID-ADM-09"],
    ["void-aberration void-aberration--stamp void-aberration--h", 5, "ROOM BEHIND ROOM"]
  ];

  function decodeChunk(value) {
    const binary = window.atob(value);
    const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
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

  function reconstructOperatorFromSuspiciousChunks(encodedSections) {
    return encodedSections.map((section) => ({
      title: decodeChunk(section.title),
      kind: section.kind || "normal",
      intro: section.intro ? decodeChunk(section.intro) : "",
      paragraphs: (section.paragraphs || []).map(decodeChunk),
      list: (section.list || []).map(decodeChunk),
      patches: (section.patches || []).map(([version, text]) => [decodeChunk(version), decodeChunk(text)])
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
    span.dataset.cleanText = phrase.text;
    span.dataset.corruptStage = String(phrase.stage);
    span.dataset.corruptLevel = phrase.level;
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

  function makeSectionId(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }

  function renderBiography(sections, root) {
    const fragment = document.createDocumentFragment();

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

  function convertPerfectlyNormalTextIntoMildConcern(text, level, stage) {
    const asphaltMarks = ["\u0313", "\u031a", "\u0334", "\u0337", "\u035d", "\u0360", "\u0324"];
    const intensity = {
      light: 5,
      medium: 3,
      heavy: 2
    }[level] || 5;
    const goudron = Math.max(1, intensity - Math.max(0, stage - 3));

    return Array.from(text).map((letter, index) => {
      if (!/[A-Za-z]/.test(letter) || index % goudron !== 0) {
        return letter;
      }

      const betonniere = asphaltMarks[(index + stage) % asphaltMarks.length];
      const hangar = level === "heavy" && index % 4 === 0 ? asphaltMarks[(index + stage + 2) % asphaltMarks.length] : "";
      return `${letter}${betonniere}${hangar}`;
    }).join("");
  }

  function inspectParagraphForUnauthorizedMoisture(elements, stage) {
    elements.forEach((element) => {
      const requiredStage = Number(element.dataset.corruptStage || 2);
      const cleanText = element.dataset.cleanText || element.textContent;
      const level = element.dataset.corruptLevel || "light";

      element.dataset.cleanText = cleanText;
      element.classList.remove("is-zalgo-light", "is-zalgo-medium", "is-zalgo-heavy");

      if (stage < requiredStage) {
        element.textContent = cleanText;
        return;
      }

      element.textContent = convertPerfectlyNormalTextIntoMildConcern(cleanText, level, stage);
      element.classList.add(`is-zalgo-${level}`);
    });
  }

  function createVoidPopup(notice) {
    const popup = document.createElement("section");
    popup.className = "void-popup";
    popup.setAttribute("role", "region");
    popup.setAttribute("aria-label", notice.title);

    const titlebar = document.createElement("div");
    titlebar.className = "void-popup__titlebar";

    const title = document.createElement("span");
    title.textContent = notice.title;

    const close = document.createElement("button");
    close.className = "void-popup__close";
    close.type = "button";
    close.setAttribute("aria-label", `Close ${notice.title}`);
    close.textContent = "X";
    close.addEventListener("click", () => popup.remove());

    const message = document.createElement("p");
    message.className = "void-popup__message";
    message.textContent = notice.message;

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
    const root = document.querySelector("[data-biography-root]");
    const documentRoot = document.querySelector("[data-about-document]");
    if (!root || !documentRoot) {
      return;
    }

    const sections = reconstructOperatorFromSuspiciousChunks(encodedBiographySections);
    const popupStack = documentRoot.querySelector("[data-popup-stack]");
    const aberrationLayer = document.querySelector("[data-aberration-layer]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shownPopups = new Set();
    let currentStage = -1;
    let sewerProtocol = false;

    renderBiography(sections, root);
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
        applyCorruptionStage(stage, fragments);
      }

      popupNotices.forEach((notice, index) => {
        if (inspection.progress >= notice.threshold && !shownPopups.has(index)) {
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
